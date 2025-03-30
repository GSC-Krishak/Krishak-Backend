import axios from "axios";
import dotenv from "dotenv";
import { prismaClient } from "../lib/db.js";

dotenv.config();

const prediction = async (req, res) => {
    try {
        const userId = req.body.userId;
        const apiUrl = process.env.PREDICTION_API_URL;
        const response = await axios.post(`${apiUrl}/recommend`, req.body);

        const requestData = req.body;
        const responseData = response.data;
        await prismaClient.AIrecomendation.create({
            data: {
                userId: userId,
                request: requestData,
                response: responseData
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error forwarding request:", error.message);
        res.status(error.response?.status || 500).json({ error: error.message });
    }
};

export default prediction;