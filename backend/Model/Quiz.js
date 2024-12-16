import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
    answer: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    answerType: {
        type: String,
        enum: ['text', 'image', 'number'],
        required: true,
    },
    isCorrect: {
        type: Boolean,
        required: true,
    },
}, {timestamps: true});

export const Answer = mongoose.model('Answer', answerSchema);


const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
    }],
}, {timestamps: true});

export const Question = mongoose.model('Question', questionSchema);


const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    guidlines: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        enum: ['private', 'public'],
        required: true,
    },
    banner: {
        type: String,
        required: false,
    },
    tutor: {
        type: String,
        required: true,
    },
    verificationCode: {
        type: String,
        required: function() {
            return this.type === 'private';
        },
        validate: {
            validator: function(value) {
                return this.type === 'private' || !value;
            },
            message: 'Verification code can only be added to private quizzes.',
        },
    },
    quizTags: {
        type: [String],
        required: false,
    },
    timeDuration: {
        type: Number,
        required: true,
        min: [1, "Time duration must be at least 1 minute."],
    },
    questions: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    }],
}, {timestamps: true});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;