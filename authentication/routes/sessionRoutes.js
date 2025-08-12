import  express from "express";
import Session from "../models/sessionModel.js";
import auth from "../middlewares/authMiddleware.js"
import role from "../middlewares/roleMiddleware.js"

const router = express.Router();

//user creates a new session
router.post("/", auth, role("user"), async (req, res) => {
    try {
        const session = await Session.create({
            user: req.user.userId,
            ...req.body
        });
        res.status(201).json(session);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Get session for a loggedin user
router.get("/me", auth, async (req, res) => {
    try {
        const sessions = await Session.find({user: req.user.userId});
        res.json(sessions);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

//Get all sessions (therapist and peer counselors)
router.get("/assigned", auth, role("therapist", "peer"), async (req, res) => {
    try {
        const sessions = await Session.find({
            counselor: req.user.userId
        });
        res.json(sessions);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

//update session status (completed/ cancelled) - therapist/ peer counselor
router.patch("/:id/status", auth, role("therapist", "peer"), async (req, res) => {
    try {
        const updated = await Session.findByIdAndUpdate(
            req.params.id,
            {status: req.body.status},
            {new: true}
        );
        res.json(updated);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});
export default router;
