import { prismaClient } from "../lib/db.js";
import redisClient from '../lib/redisClient.js';

export const getDataDashboard = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({ error: "userId is required" });
        }

        // Check cache first
        const cacheKey = `userRequests:${userId}`;
        const cachedData = await redisClient.get(cacheKey);

        if (cachedData) {
            return res.status(200).json(JSON.parse(cachedData));
        }

        // Fetch from database if not in cache
        const userRequests = await prismaClient.aIrecomendation.findMany({
            where: { userId },
        });

        // Store result in cache
        await redisClient.set(cacheKey, JSON.stringify(userRequests), 'EX', 3600); 

        res.status(200).json(userRequests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};