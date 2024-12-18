import Quiz, { Question } from "../Model/Quiz.js";
import StudentAnswer from "../Model/StudentAnswer.js";

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

export const getStudentAnswers = async (req, res) => {

    const { studentId, quizId } = req.params;

    try {
        // Find all answers submitted by the student for the quiz
        const studentAnswers = await StudentAnswer.find({ student: studentId, quiz: quizId });

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
