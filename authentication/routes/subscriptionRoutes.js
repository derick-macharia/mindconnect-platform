import express from "express";
import subController from "../controllers/subscriptionController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

//create (after payment), view, cancel
router.post("/", auth, subController.createSubscription);
router.get("/me", auth, subController.getSubscription);
router.post("/cancel", auth, subController.cancelSubscription);

export default router;