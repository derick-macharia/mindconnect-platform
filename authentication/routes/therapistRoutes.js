import express from "express";
import Therapist from "../models/therapistModel.js";
import auth from "../middlewares/authMiddleware.js";
import authorizeRoles from "../middlewares/roleMiddleware.js";

const router = express.Router();

//Get therapist profile
router.get("/me", auth, role("therapist"), async(requestAnimationFrame, res) => {
  try {
    const therapist = await Therapist.findOne({user: requestAnimationFrame.user.userId}).populate("user", "-password");
    if (!therapist) {
        return res.status(404).json({message: "Therapist profile not found"});
    }else{
        res.json(therapist);
    }
  } catch (error) {
    res.status(500).json({message: "Internal server error", error});
  }  
});

//Update therapist profile
router.put("/me", auth, role("therapist"), async (req, res) => {
    try {
        const updated = await Therapist.findByIdAndUpdate(
            {user: req.user.userId},
            req.body,
            {new: true}
        );
        res.json(updated);
    } catch (error) {
        res.status(500).json({message: "Error in updating therapist profile"});
    }
});
export default router;