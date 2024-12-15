import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./Routes/userRoute.js";
import authRoute from "./Routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoute);

export default app; // Use default export
