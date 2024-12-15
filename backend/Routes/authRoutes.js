import express from "express";
import { signup, login, test } from "../Controllers/authController.js";

const router = express.Router();

router.post("/signup", signup); // User signup
router.post("/login", login); // User login
router.get("/test", test); // Test route

export default router;
