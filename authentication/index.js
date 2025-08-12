import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import authRoutes from "./routes/authRoutes.js";
import therapistRoutes from "./routes/therapistRoutes.js"
import sessionRoutes from "./routes/sessionRoutes.js"

dotenv.config();

dbConnect();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/therapist", therapistRoutes);
app.use("/api/sessions", sessionRoutes);

// Start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT , () => {
    console.log(`Server is running at port ${PORT}`);
});