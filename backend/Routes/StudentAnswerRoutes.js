import { 
    submitStudentAnswers, 
    getStudentAnswers,
 } from "../Controllers/StudentAnswerController-2.js";
import { authenticate, authorize } from "../middleware/authenticate.js";
import express from "express";

const studentAnswerRouter = express.Router();

studentAnswerRouter.post(
    "/submit", 
    authenticate,
    authorize("admin", "student"), 
    submitStudentAnswers
);

studentAnswerRouter.get(
    "/:studentId/:quizId", 
    authenticate,
    authorize("admin", "student"), 
    getStudentAnswers
);

export default studentAnswerRouter;