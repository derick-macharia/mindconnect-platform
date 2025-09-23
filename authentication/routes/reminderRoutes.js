import express from "express";
import reminderController from "../controllers/reminderController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

// all actions are authenticated per user
router.post("/", auth, reminderController.createReminder);
router.get("/me", auth, reminderController.getUserReminders);
router.put("/:id", auth, reminderController.updateReminder);
router.delete("/:id", auth, reminderController.deleteReminder);

export default router;