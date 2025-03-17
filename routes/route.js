import express from "express";
import home from "../controllers/homeController.js";
import prediction from "../controllers/predictController.js";

const router = express.Router();

// routes.use(cors());


router.get('/', home);
router.post("/predict", prediction);

export default router;