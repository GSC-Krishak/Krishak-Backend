import axios from "axios";
import dotenv from "dotenv";
import { prismaClient } from "../lib/db.js";
import redisClient from "../lib/redisClient.js"; 
import { isValidStateAndDistrict } from "../utils/stateDistrictChecker.js";

dotenv.config();

const prediction = async (req, res) => {
    try {
        const userId = req.body.userId;
        const apiUrl = process.env.PREDICTION_API_URL;
        const requestData = req.body;
        const district = req.body.district;
        const state = req.body.state;

        // Validate state and district
        if (!isValidStateAndDistrict(state, district)) {
            console.warn("Invalid state or district");
            res.status(400).json({ error: "Invalid state or district" });
            return;
        }
        
        if (!apiUrl) {
            console.error("PREDICTION_API_URL is not defined in environment variables");
            res.status(500).json({ error: "PREDICTION_API_URL is not defined in environment variables" });
            return;
        }
        

        if (userId) {
            try {
                const response = await axios.post(`${apiUrl}/recommend`, requestData);
                const responseData = response.data;

                // Check if responseData is valid
                if (!responseData) {
                    console.error("No response data received from the prediction API");
                    res.status(500).json({ error: "No response data received from the prediction API" });
                    return;
                }
                
                await prismaClient.AIrecomendation.create({
                    data: {
                        userId: userId,
                        request: requestData,
                        response: responseData
                    }
                });
                
                // Remove existing cache for the user
                const cacheKey = `userRequests:${userId}`;
                await redisClient.del(cacheKey);

                res.json(responseData);
            } catch (dbError) {
                console.error("Database error:", dbError.message);
                res.status(500).json({ error: "Failed to save recommendation to the database" });
                return;
            }
        } else {
            console.warn("userId missing or invalid");
            res.status(400).json({ error: "userId is missing or invalid" });
            return;
        }
        // res.status(500).message("Something went wrong!")
        
    } catch (error) {
        console.error("Error forwarding request:", error.message);
        res.status(error.response?.status || 500).json({ error: error.message });
    }
};

export default prediction;