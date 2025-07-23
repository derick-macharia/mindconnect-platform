const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

// Only admin can access this route
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({message: "welcome admin"});
});
// Only admin and therapist can access this route
router.get("/therapist", verifyToken, authorizeRoles("admin", "therapis"), (req, res) => {
    res.json({message: "welcome therapist"});
});
//Only admin and peer counselor can access this route
router.get("/peerCounselor", verifyToken, authorizeRoles("admin", "peerCounselor"), (req, res) => {
    res.json({message: "welcome peer counselor"});
});
//all can access this route
router.get("/user", verifyToken, authorizeRoles("admin", "therapist", "peerCounselor","user"), (req, res) => {
    res.json({message: "welcome user"});
});
module.exports = router;