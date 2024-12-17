import { submitStudentAnswers, getStudentAnswers } from "../Controllers/StudentAnswerController-2.js";
import express from "express";

const studentAnswerRouter = express.Router();

studentAnswerRouter.post("/submit", submitStudentAnswers);
studentAnswerRouter.get("/:studentId/:quizId", getStudentAnswers);

export default studentAnswerRouter;