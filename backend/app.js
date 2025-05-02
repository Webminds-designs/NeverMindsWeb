import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"; // Add this import
import userRoutes from "./Routes/userRoute.js";
import authRoute from "./Routes/authRoutes.js";
import quizRoutes from "./Routes/QuizRoutes.js";
import studentAnswerRouter from "./Routes/StudentAnswerRoutes.js";

dotenv.config();

const app = express();
app.use(cors()); // Add this middleware
app.use(bodyParser.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoute);
app.use("/api/quizzes", quizRoutes);
app.use("/api/answers", studentAnswerRouter);

export default app;
