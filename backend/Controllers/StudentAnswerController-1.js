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