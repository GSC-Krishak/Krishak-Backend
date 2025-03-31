import express from "express";
import home from "../controllers/homeController.js";
import prediction from "../controllers/predictController.js";
import { getDataDashboard } from "../controllers/getDataDashboard.js";
import {getData} from "../controllers/getData.js";

const router = express.Router();

// routes.use(cors());


router.get('/', home);
router.post("/predict", prediction);
router.post('/getDataDashboard', getDataDashboard);
router.get('/data',getData)

export default router;