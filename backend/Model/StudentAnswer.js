import mongoose from "mongoose";

const studentAnswerSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true,
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
    },
    selectedAnswers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
        required: true,
    }],
    score: {
        type: Number,
        required: true,
    },

}, {timestamps: true});

const StudentAnswer = mongoose.model("StudentAnswer", studentAnswerSchema);

export default StudentAnswer;