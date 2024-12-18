import mongoose from "mongoose";

const favouriteQuizSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    quiz: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true,
    }],
}, { timestamps: true });

const FavouriteQuiz = mongoose.model("FavouriteQuiz", favouriteQuizSchema);

export default FavouriteQuiz;