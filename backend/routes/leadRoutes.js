import express from "express";
import { getLeads, addLead } from "../controllers/leadController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getLeads);
router.post("/", authMiddleware, addLead);

export default router;
