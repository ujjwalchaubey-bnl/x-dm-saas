import express from "express";
import { createCampaign, getCampaigns } from "../controllers/campaignController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getCampaigns);
router.post("/", authMiddleware, createCampaign);

export default router;
