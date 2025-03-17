import express from "express";
import home from "../controllers/homeController.js";

const routes = express.Router();

// routes.use(cors());
routes.use(express.json());

routes.get('/', home);

export default routes;