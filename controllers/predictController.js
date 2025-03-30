import axios from "axios";
import dotenv from "dotenv";
import { prismaClient } from "../lib/db.js";

dotenv.config();

const prediction = async (req, res) => {
    try {
        const userId = req.body.userId;
        const apiUrl = process.env.PREDICTION_API_URL;

        if (!apiUrl) {
            return res.status(500).json({ error: "PREDICTION_API_URL is not defined in environment variables" });
        }

        const response = await axios.post(`${apiUrl}/recommend`, req.body);

        const requestData = req.body;
        const responseData = response.data;

        if (userId) {
            try {
                await prismaClient.AIrecomendation.create({
                    data: {
                        userId: userId,
                        request: requestData,
                        response: responseData
                    }
                });
            } catch (dbError) {
                console.error("Database error:", dbError.message);
                return res.status(500).json({ error: "Failed to save recommendation to the database" });
            }
        } else {
            return res.status(400).json({ error: "userId is missing or invalid" });
        }

        res.json(response.data);
    } catch (error) {
        console.error("Error forwarding request:", error.message);
        res.status(error.response?.status || 500).json({ error: error.message });
    }
};

export default prediction;