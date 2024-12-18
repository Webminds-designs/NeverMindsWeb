import { 
    createQuiz, 
    getAllQuizzes, 
    getQuizById, 
    updateQuiz, 
    deleteQuiz,
    getAllQuizzesByStudentId,
    getAllQuizzesByTeacherId,
    getAllMarksByTeacherIdQuizId, 
} from "../Controllers/QuizController.js";
import { addFavouriteQuiz, viewFavouriteByUserId, removeFavouriteQuiz, clearAllFavouritesByUserId } from "../Controllers/FavouriteQuizController.js"
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

quizRoutes.get(
    "/student/:studentId", 
    authenticate,
    authorize("admin", "student"), 
    getAllQuizzesByStudentId
);

quizRoutes.get(
    "/teacher/:teacherId", 
    authenticate,
    authorize("admin", "teacher"),
    getAllQuizzesByTeacherId
);

quizRoutes.get(
    "/teacher/:teacherId/:quizId",
    authenticate,
    authorize("admin", "teacher"),
    getAllMarksByTeacherIdQuizId
);


// ----------------------- FAVOURITE QUIZ -----------------------


quizRoutes.post(
    "/favorite", 
    authenticate,
    authorize("student"), 
    addFavouriteQuiz
);

quizRoutes.get(
    "/favorite/:userId", 
    authenticate, 
    authorize("student"),
    viewFavouriteByUserId
);

quizRoutes.delete(
    "/favorite/:userId/:quizId", 
    authenticate,
    authorize("student"), 
    removeFavouriteQuiz
);

quizRoutes.delete(
    "/favorite/:userId", 
    authenticate, 
    authorize("student"),
    clearAllFavouritesByUserId
);

export default quizRoutes;