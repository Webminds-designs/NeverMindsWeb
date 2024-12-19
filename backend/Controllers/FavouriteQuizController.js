import FavouriteQuiz from "../Model/FavouriteQuiz.js";
import Quiz from "../Model/Quiz.js";


// Add a quiz to the user's favorites
export const addFavouriteQuiz = async (req, res) => {
    const { userId, quizId } = req.body;

    try {
        // check if the quiz is already in the user's favourite list
        const quizExists = await Quiz.findById(quizId);
        if (!quizExists) {
            return res.status(404).json({ success: false, message: "Quiz not found." });
        }

        // Check if the user already has a favorite quizzes entry
        let favourite = await FavouriteQuiz.findOne({ user: userId });

        if (favourite) {
            // Add the quiz to the array if not already present
            if (!favourite.quiz.includes(quizId)) {
                favourite.quiz.push(quizId);
                await favourite.save();
            }
        } else {
            // Create a new favorite entry for the user
            favourite = await FavouriteQuiz.create({ user: userId, quiz: [quizId] });
        }

        return res.status(200).json({ success: true, message: "Quiz added to favorites." });

    } catch (error) {
        console.error("Error while adding quiz to favorites:", error);
        return res.status(500).json({ success: false, message: "Server error while adding quiz to favorites." });
    }
};


// Remove a quiz from the user's favorites
export const removeFavouriteQuiz = async (req, res) => {
    const { userId, quizId } = req.params;

    try {
        // Find the user's favorite quizzes
        const favourite = await FavouriteQuiz.findOne({ user: userId });

        if (!favourite) {
            return res.status(404).json({ success: false, message: "No favorite quizzes found for this user." });
        }

        // Remove the quiz from the array
        favourite.quiz = favourite.quiz.filter((id) => id.toString() !== quizId);
        await favourite.save();

        return res.status(200).json({ success: true, message: "Quiz removed from favorites." });
    } catch (error) {
        console.error("Error while removing favorite quiz:", error);
        return res.status(500).json({ success: false, message: "Server error while removing favorite quiz." });
    }
};


// View all favorite quizzes by user ID
export const viewFavouriteByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        // Find the user's favorite quizzes
        const favourite = await FavouriteQuiz.findOne({ user: userId }).populate("quiz");

        if (!favourite) {
            return res.status(404).json({ success: false, message: "No favorite quizzes found for this user." });
        }

        return res.status(200).json({ success: true, data: favourite.quiz });
    } catch (error) {
        console.error("Error while viewing favorite quizzes:", error);
        return res.status(500).json({ success: false, message: "Server error while viewing favorite quizzes." });
    }
};


// Clear all favorite quizzes by user ID
export const clearAllFavouritesByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        // Find the user's favorite quizzes
        const favourite = await FavouriteQuiz.findOne({ user: userId });

        if (!favourite) {
            return res.status(404).json({ success: false, message: "No favorite quizzes found for this user." });
        }

        // Clear the quiz array
        favourite.quiz = [];
        await favourite.save();

        return res.status(200).json({ success: true, message: "All favorite quizzes cleared." });
    } catch (error) {
        console.error("Error while clearing favorite quizzes:", error);
        return res.status(500).json({ success: false, message: "Server error while clearing favorite quizzes." });
    }
};
