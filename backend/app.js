import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./Routes/userRoute.js";
import authRoute from "./Routes/authRoutes.js";
import quizRoutes from "./Routes/QuizRoutes.js";
import studentAnswerRouter from "./Routes/StudentAnswerRoutes.js";

dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Increase JSON payload size limit if needed
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

// API routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoute);
app.use("/api/quizzes", quizRoutes);
app.use("/api/answers", studentAnswerRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({
    message: "Internal server error",
    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : "An error occurred",
  });
});

export default app;
