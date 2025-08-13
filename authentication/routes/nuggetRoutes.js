import express from "express";
import nuggetController from "../controllers/nuggetController.js";
import auth from "../middlewares/authMiddleware.js"
import role from "../middlewares/roleMiddleware.js"

const router = express.Router();

router.get("/", nuggetController.getNuggets);
router.get("/:id", nuggetController.getNugget);

//create / delete - protected (therapist)
router.post("/", auth, role("therapist"), nuggetController.createNugget);
router.delete("/:id", auth, role("therapist"), nuggetController.deleteNugget);

export default router;