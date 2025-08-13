import express from "express";
import eventController from "../controllers/eventController.js"
import auth from "../middlewares/authMiddleware.js";
import role from "../middlewares/roleMiddleware.js";

const router = express.Router();

// public list and details
router.get("/", eventController.getEvents);
router.get("/:id", eventController.getEvent);

// create / update (therapist)
router.post("/", auth, role("therapist", "peer"), eventController.createEvent);
router.put("/:id", auth, role("therapist", "peer"), eventController.updateEvent);

//register/join (authenticated users)
router.post("/:id/join", auth, role("user", "therapist", "peer"), eventController.joinEvent);

export default router;