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
    answerType: {
        type: String,
        enum: ['single', 'multiple'],
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
        type: [mongoose.Schema.Types.Mixed],
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
    imageVector: {
        type: String,
        required: true,
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    verificationCode: {
        type: String,
        required: function() {
            return this.type === 'private';
        },
        validate: {
            validator: function(value) {
                // Validation for 'private' type quiz: 6 characters with alphanumeric values
                return this.type === 'private' ? /^[a-zA-Z0-9]{6}$/.test(value) : !value;
            },
            message: 'Verification code must be 6 characters long and contain both letters and numbers.',
        },
        default: function() {
            // Auto-generate the verification code (6 characters, alphanumeric)
            return this.type === 'private' ? generateVerificationCode() : undefined;
        },
    },
    quizTags: {
        type: [String],
        required: false,
    },
    timeDuration: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                // Validate time format HH:MM:SS
                return /^([0-1]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/.test(value);
            },
            message: 'Time must be in the format HH:MM:SS.',
        },
    },
    questions: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    }],
}, {timestamps: true});



// Function to generate a 6-character alphanumeric code
function generateVerificationCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}



const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;