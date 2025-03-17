import express from "express";
import home from "../controllers/homeController.js";
import prediction from "../controllers/predictController.js";

const routes = express.Router();

// routes.use(cors());


routes.get('/', home);
routes.post('/predict', prediction);

export default routes;