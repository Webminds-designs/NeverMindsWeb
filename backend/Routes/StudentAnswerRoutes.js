import { 
    submitStudentAnswers, 
    getStudentAnswers,
    getAllQuizzesByStudentId,
    getAllQuizzesByTeacherId,
    getAllMarksByTeacherIdQuizId
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
    "/student/:studentId/:quizId", 
    authenticate,
    authorize("admin", "student"), 
    getStudentAnswers
);

studentAnswerRouter.get(
    "/student/:studentId", 
    authenticate,
    authorize("admin", "student"), 
    getAllQuizzesByStudentId
);

studentAnswerRouter.get(
    "/teacher/:teacherId", 
    authenticate,
    authorize("admin", "teacher"),
    getAllQuizzesByTeacherId
);

studentAnswerRouter.get(
    "/teacher/:teacherId/:quizId",
    authenticate,
    authorize("admin", "teacher"),
    getAllMarksByTeacherIdQuizId
);

export default studentAnswerRouter;