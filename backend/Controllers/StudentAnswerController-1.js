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
            const { questionId, selectedAnswerIds, score } = answer;

            // validate each answer object
            if(!questionId || !selectedAnswerIds || typeof score !== "number") {
                return res.status(400).json({ success: false, message: "Invalid answer object" });
            }

            // save the answer into the database
            await StudentAnswer.create({
                student: studentId,
                quiz: quizId,
                question: questionId,
                selectedAnswers: selectedAnswerIds,
                score: score,
            });
        }   

        res.json({ success: true, message: "Student answers submitted successfully" });
    } catch (error) {
        console.error("Error in submitStudentAnswers:", error);
        res.status(500).json({ success: false, message: "Unable to submit answers" });
    }
};


// ----------------------- GET STUDENT ANSWERS -----------------------


export const getStudentAnswers = async (req, res) => {
    const { studentId, quizId } = req.params;

    try {
        if(!studentId || !quizId) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // fetch the answers submitted by the student for the quiz
        const studentAnswers = await StudentAnswer.find({ student: studentId, quiz: quizId })
            .populate("question")
            .populate("selectedAnswers");

        return res.status(200).json({ 
            message: "Student answers fetched successfully",
            data: studentAnswers
        });

    } catch (error) {
        console.error("Error while fetching student answers:", error);
        return res.status(500).json({ message: "Server error while fetching answers." });
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