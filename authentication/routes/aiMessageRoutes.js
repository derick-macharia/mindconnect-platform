import express from "express";
import {sendAiMessage, getAiMessages} from "../controllers/aiMessageController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, sendAiMessage);
router.get("/", authMiddleware, getAiMessages);

export default router;