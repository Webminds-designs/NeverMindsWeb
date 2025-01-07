import Quiz, { Answer, Question } from "../Model/Quiz.js";
import StudentAnswer from "../Model/StudentAnswer.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";


// ----------------------- CREATE QUIZ -----------------------


export const createQuiz = async (req, res) => {
    try {
        const { title, description, guidlines, type, imageVector, tutor, verificationCode, quizTags, timeDuration, questions } = req.body;

        let uploadedBanner;

        if (req.file) {
            // Upload banner to Cloudinary and store the URL and public ID
            uploadedBanner = await cloudinary.uploader.upload(
                req.file.path,
                { 
                    public_id: req.file.filename,
                    folder: "quiz-banners",
                }
            );

            // After uploading to Cloudinary, delete the file from the server
            fs.unlinkSync(req.file.path);
        }

        try {
            // Create answers and questions
            const createdQuestions = await Promise.all(JSON.parse(questions).map(async (question) => {
                const createdAnswers = await Promise.all(question.answers.map(async (answer) => {
                    const newAnswer = new Answer(answer);
                    await newAnswer.save();
                    return newAnswer._id;
                }));

                const newQuestion = new Question({
                    question: question.question,
                    answerType: question.answerType,
                    image: question.image,
                    answers: createdAnswers,
                });

                await newQuestion.save();
                return newQuestion._id;
            }));

            // Create quiz
            const newQuiz = new Quiz({
                title,
                description,
                guidlines,
                type,
                banner: uploadedBanner ? { url: uploadedBanner.secure_url, public_id: uploadedBanner.public_id } : '',
                imageVector,
                tutor,
                verificationCode,
                quizTags,
                timeDuration,
                questions: createdQuestions,
            });

            await newQuiz.save();
            res.status(201).json(newQuiz);

        } catch (error) {
            // Delete the uploaded banner from Cloudinary if an error occurs
            if (uploadedBanner && uploadedBanner.public_id) {
                await cloudinary.uploader.destroy(uploadedBanner.public_id).catch(err => {
                    console.error("Failed to delete banner from Cloudinary:", err.message);
                });
            }
            throw error; // Rethrow the error to propagate it to the outer catch
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// ----------------------- GET ALL QUIZZES -----------------------


export const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find().populate({
            path: 'questions',
            populate: {
                path: 'answers',
            }
        });

        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// ----------------------- GET QUIZ BY ID -----------------------


export const getQuizById = async (req, res) => {
    const { id } = req.params;

    try {
        const quiz = await Quiz.findById(id).populate({
            path: 'questions',
            populate: {
                path: 'answers',
            }
        });

        if(!quiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// ----------------------- UPDATE QUIZ -----------------------


export const updateQuiz = async (req, res) => {
    const { id } = req.params;
    const { title, description, guidlines, type, imageVector, tutor, verificationCode, quizTags, timeDuration, questions } = req.body;

    try {
        const quiz = await Quiz.findById(id);

        if (!quiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        let newBanner = quiz.banner; // Default to the current banner
        let newPublicId = null; // Store the public_id of the new uploaded banner

        if (req.file) {
            try {
                // Upload the new banner to Cloudinary
                const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
                    public_id: req.file.filename,
                    folder: 'quiz-banners',
                });

                newBanner = {
                    url: uploadedImage.secure_url,
                    public_id: uploadedImage.public_id,
                };

                newPublicId = uploadedImage.public_id; // Track the new banner's public_id

                // Delete the old banner from Cloudinary if it exists
                if (quiz.banner && quiz.banner.public_id) {
                    await cloudinary.uploader.destroy(quiz.banner.public_id).catch(err => {
                        console.error("Failed to delete old banner from Cloudinary:", err.message);
                    });
                }

                // Remove the uploaded file from the local server
                fs.unlinkSync(req.file.path);
            } catch (uploadError) {
                // If the upload fails, throw an error
                throw new Error(`Failed to upload new banner: ${uploadError.message}`);
            }
        }

        try {
            // Update questions and answers
            const updatedQuestions = await Promise.all(JSON.parse(questions).map(async (question) => {
                if (question._id) {
                    const existingQuestion = await Question.findById(question._id);
                    if (!existingQuestion) {
                        throw new Error(`Question ${question._id} not found`);
                    }

                    const updatedAnswers = await Promise.all(question.answers.map(async (answer) => {
                        if (answer._id) {
                            return await Answer.findByIdAndUpdate(answer._id, answer, { new: true });
                        } else {
                            const newAnswer = new Answer(answer);
                            await newAnswer.save();
                            return newAnswer._id;
                        }
                    }));

                    existingQuestion.question = question.question;
                    existingQuestion.answerType = question.answerType;
                    existingQuestion.image = question.image;
                    existingQuestion.answers = updatedAnswers;

                    await existingQuestion.save();
                    return existingQuestion._id;
                } else {
                    const createdAnswers = await Promise.all(question.answers.map(async (answer) => {
                        const newAnswer = new Answer(answer);
                        await newAnswer.save();
                        return newAnswer._id;
                    }));

                    const newQuestion = new Question({
                        question: question.question,
                        answerType: question.answerType,
                        image: question.image,
                        answers: createdAnswers,
                    });

                    await newQuestion.save();
                    return newQuestion._id;
                }
            }));

            // Update the quiz fields
            quiz.title = title || quiz.title;
            quiz.description = description || quiz.description;
            quiz.guidlines = guidlines || quiz.guidlines;
            quiz.type = type || quiz.type;
            quiz.banner = newBanner; // Use the new or existing banner
            quiz.imageVector = imageVector || quiz.imageVector;
            quiz.tutor = tutor || quiz.tutor;
            quiz.verificationCode = verificationCode || quiz.verificationCode;
            quiz.quizTags = quizTags || quiz.quizTags;
            quiz.timeDuration = timeDuration || quiz.timeDuration;
            quiz.questions = updatedQuestions;

            await quiz.save();

            res.status(200).json(quiz);

        } catch (updateError) {
            // If an error occurs, delete the new uploaded banner from Cloudinary
            if (newPublicId) {
                await cloudinary.uploader.destroy(newPublicId).catch(err => {
                    console.error("Failed to delete new banner from Cloudinary:", err.message);
                });
            }

            throw updateError; // Rethrow the error to the outer catch block
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// ----------------------- DELETE QUIZ -----------------------


export const deleteQuiz = async (req, res) => {
    const { id } = req.params;

    try {
        const quiz = await Quiz.findById(id);

        if (!quiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        // Delete all associated questions and their answers
        await Promise.all(quiz.questions.map(async (questionId) => {
            const question = await Question.findById(questionId);

            if (question) {
                // Delete all answers associated with the question
                await Promise.all(question.answers.map(async (answerId) => {
                    await Answer.findByIdAndDelete(answerId);
                }));

                // Delete the question
                await Question.findByIdAndDelete(questionId);
            }
        }));

        // Delete the quiz itself
        await Quiz.findByIdAndDelete(id);

        // After successful quiz and related data deletion, delete the banner from Cloudinary
        if (quiz.banner && quiz.banner.public_id) {
            try {
                await cloudinary.uploader.destroy(quiz.banner.public_id);
            } catch (err) {
                console.error("Error deleting banner from Cloudinary:", err.message);
            }
        }

        res.status(200).json({ message: "Quiz and associated data deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
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