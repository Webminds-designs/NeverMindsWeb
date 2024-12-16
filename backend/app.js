import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./Routes/userRoute.js";
import authRoute from "./Routes/authRoutes.js";
import quizRoutes from "./Routes/QuizRoutes.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoute);
app.use("/api/quizzes", quizRoutes);

export default app; // Use default export
