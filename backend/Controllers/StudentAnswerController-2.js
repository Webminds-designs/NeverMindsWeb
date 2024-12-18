import Quiz, { Question } from "../Model/Quiz.js";
import StudentAnswer from "../Model/StudentAnswer.js";

// ----------------------- SUBMIT STUDENT ANSWERS -----------------------

export const submitStudentAnswers = async (req, res) => {

    const { studentId, quizId, studentAnswers } = req.body;

    try {
        // validate required fields
        if (!studentId || !quizId || !studentAnswers) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // loop through each answer and save it
        for(const answer of studentAnswers) {
            const { questionId, selectedAnswerIds } = answer;

            // fetch the question and its answers
            const question = await Question.findById(questionId).populate("answers");

            // get all the correct answers for the question
            const correctAnswers = question.answers.filter(answer => answer.isCorrect);

            // calculate how many correct answers the student selected
            const selectedCorrectedAnswers = selectedAnswerIds.filter(id =>
                correctAnswers.some(correctAnswer => correctAnswer._id.toString() === id.toString())
            );

            // calculate the score for the question
            const score = selectedCorrectedAnswers.length / correctAnswers.length;

            // save the student answer
            await StudentAnswer.create({
                student: studentId,
                quiz: quizId,
                question: questionId,
                selectedAnswers: selectedAnswerIds,
                score: score,    // this will be a number between 0 and 1
            });
        }

        return res.status(201).json({ success: true, message: "Student answers submitted successfully" });

    } catch (error) {
        console.error("Error in submitStudentAnswers:", error);
        return res.status(500).json({ success: false, message: "Unable to submit answers" });
    }
};


// ----------------------- GET STUDENT ANSWERS -----------------------


export const getStudentAnswers = async (req, res) => {

    const { studentId, quizId } = req.params;

    try {
        // Find all answers submitted by the student for the quiz
        const studentAnswers = await StudentAnswer.find({ student: studentId, quiz: quizId })
            .populate("quiz")
            .populate({
                path: "question",
                populate: {
                    path: "answers",
                }
            })
            .populate("selectedAnswers");

        // Calculate total score as the average of the individual question scores
        const totalScore = studentAnswers.reduce((acc, answer) => acc + answer.score, 0);
        const averageScore = totalScore / studentAnswers.length;

        return res.status(200).json({
            data: studentAnswers,
            averageScore,  // This will be a value between 0 and 1
            percentage: averageScore * 100  // Convert to percentage
        });
    } catch (error) {
        console.error("Error while fetching student score:", error);
        return res.status(500).json({ message: "Server error while fetching score." });
    }
};


// ----------------------- GET ALL QUIZZES BY STUDENT ID -----------------------


export const getAllQuizzesByStudentId = async (req, res) => {
    
    const { studentId } = req.params;

    try {
        // find all quizzes attempted by the student
        const quizzes = await StudentAnswer.find({ student: studentId })
            .distinct("quiz");  // this returns only the unique quiz ids

        return res.status(200).json({ data: quizzes });
        
    } catch (error) {
        console.error("Error while fetching student quizzes:", error);
        return res.status(500).json({ message: "Server error while fetching quizzes." });
    }

};


// ----------------------- GET ALL QUIZZES BY TEACHER ID -----------------------


export const getAllQuizzesByTeacherId = async (req, res) => {
    
    const { teacherId } = req.params;

    try {
        // find all quizzes created by the teacher
        const quizzes = await Quiz.find({ tutor: teacherId });

        return res.status(200).json({ quizzes });
        
    } catch (error) {
        console.error("Error while fetching teacher quizzes:", error);
        return res.status(500).json({ message: "Server error while fetching quizzes." });
    }

};


// ----------------------- GET ALL MARKS BY TEACHER ID AND QUIZ ID -----------------------


export const getAllMarksByTeacherIdQuizId = async (req, res) => {
    
    const { teacherId, quizId } = req.params;

    try {
        // verify if the quiz is belong to the teacher
        const quiz = await Quiz.findOne({ _id: quizId, tutor: teacherId });
        if (!quiz) {
            return res.status(404).json({ message: "Quiz not found or not associated with the teacher" });
        }

        // find all student answers for the quiz
        const studentAnswers = await StudentAnswer.find({ quiz: quizId })
            .populate("student")
            .populate("question");

        // calculate scores by student
        const scoresByStudent = {};

        studentAnswers.forEach((answer) => {
            if(!scoresByStudent[answer.student._id]) {
                scoresByStudent[answer.student._id] = {
                    student: answer.student,
                    totalScore: 0,
                    totalQuestions: 0,
                };
            }

            scoresByStudent[answer.student._id].totalScore += answer.score;
            scoresByStudent[answer.student._id].totalQuestions += 1;
        });

        const results = Object.values(scoresByStudent).map((entry) => ({
            student: entry.student,
            totalScore: entry.totalScore,
            averageScore: (entry.totalScore / entry.totalQuestions) * 100,
        }));

        return res.status(200).json({ results });
        
    } catch (error) {
        console.error("Error while fetching teacher quizzes:", error);
        return res.status(500).json({ message: "Server error while fetching quizzes." });
    }

};