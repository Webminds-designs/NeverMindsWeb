import { createQuiz, getAllQuizzes, getQuizById, updateQuiz, deleteQuiz } from "../Controllers/QuizController.js";
import { authenticate, authorize } from "../middleware/authenticate.js";
import express from "express";

const quizRoutes = express.Router();

quizRoutes.post(
    "/", 
    authenticate, 
    authorize("admin"), 
    createQuiz
);

quizRoutes.get(
    "/", 
    authenticate, 
    authorize("admin", "student", "teacher"), 
    getAllQuizzes
);

quizRoutes.get(
    "/:id", 
    authenticate, 
    authorize("admin"), 
    getQuizById
);

quizRoutes.put(
    "/:id", 
    authenticate, 
    authorize("admin"), 
    updateQuiz
);

quizRoutes.delete(
    "/:id", 
    authenticate, 
    authorize("admin"), 
    deleteQuiz
);

export default quizRoutes;