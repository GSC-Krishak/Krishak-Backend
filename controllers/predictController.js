import axios from "axios";
import dotenv from "dotenv";
import { prismaClient } from "../lib/db.js";

dotenv.config();

const prediction = async (req, res) => {
    console.log(req.body);
    const userId = req.body.userId; // Ensure userId is extracted properly
    try {
        const apiUrl = process.env.PREDICTION_API_URL;
        const response = await axios.post(`${apiUrl}/recommend`, req.body);

        // Save soil report to the database
        const requestData = req.body;
        const soilReport = await prismaClient.soilReport.create({
            data: {
                userId: userId,
                n: requestData.n,
                p: requestData.p,
                k: requestData.k,
                mg: requestData.mg,
                calcium: requestData.calcium,
                ph: requestData.ph,
                previousCrops: {
                    create: requestData.previous_crops.map(crop => ({
                        name: crop
                    }))
                }
            }
        });

        // Save recommendation response to the database
        const responseData = response.data;
        const recommendation = await prismaClient.recommendations.create({
            data: {
                userId: userId,
                requestId: requestData.requestId || null,
                cropRecommended: {
                    create: responseData.Recommended_Crops.map(crop => ({
                        commodity: crop.Commodity,
                        profitability: crop.Profitability,
                        fertilizerCost: crop.Fertilizer_Cost,
                        compatibility: crop.Compatibility,
                        nitrogen: crop.Fertilizer_Adjustments["Nitrogen (N)"],
                        phosphorus: crop.Fertilizer_Adjustments["Phosphorus (P)"],
                        potassium: crop.Fertilizer_Adjustments["Potassium (K)"],
                        magnessium: crop.Fertilizer_Adjustments["Magnesium (Mg)"],
                        calcium: crop.Fertilizer_Adjustments["Calcium (Ca)"]
                    }))
                }
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error forwarding request:", error.message);
        res.status(error.response?.status || 500).json({ error: error.message });
    }
};

export default prediction;