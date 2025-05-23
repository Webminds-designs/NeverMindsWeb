import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Available grades and subjects
const availableGrades = [
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
  "Grade 13",
];

const availableSubjects = [
  "Science",
  "Mathematics",
  "Sinhala",
  "History",
  "English Literature",
  "ICT",
  "English",
  "Buddhism",
  "Business studies & Accounting",
];

// Subdocument schema for students
const studentSchema = new mongoose.Schema(
  {
    interestTags: {
      type: [String],
      validate: {
        validator: function (tags) {
          // Validate that all provided subjects are from the available list
          return tags.every((tag) => availableSubjects.includes(tag));
        },
        message: (props) =>
          `${props.value} contains invalid subject selections!`,
      },
    },
    grade: {
      type: String,
      trim: true,
      validate: {
        validator: function (grade) {
          return availableGrades.includes(grade);
        },
        message: (props) => `${props.value} is not a valid grade!`,
      },
    },
    guardianName: { type: String, trim: true },
    guardianContact: {
      type: String,
      validate: {
        validator: (v) => /^[0-9]{10}$/.test(v),
        message: (props) => `${props.value} is not a valid contact number!`,
      },
    },
    description: { type: String, trim: true },
    quizAttempts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StudentAnswer",
      },
    ],
    favouriteQuizzes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      },
    ],
  },
  { _id: false }
);

// Subdocument schema for teachers
const teacherSchema = new mongoose.Schema(
  {
    contactNo: {
      type: String,
      validate: {
        validator: (v) => /^[0-9]{10}$/.test(v),
        message: (props) => `${props.value} is not a valid contact number!`,
      },
    },
    webUrl: {
      type: String,
      validate: {
        validator: (v) =>
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(v),
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    password: { type: String, required: true, minlength: 6 },
    role: {
      type: String,
      enum: ["admin", "teacher", "student"],
      required: true,
    },
    studentDetails: {
      type: studentSchema,
      required: false, // Optional field
    },
    teacherDetails: {
      type: teacherSchema,
      required: false, // Optional field
    },
  },
  { timestamps: true }
);

// Password hashing
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Password comparison
userSchema.methods.isPasswordMatch = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

// Exclude password from JSON response
userSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  },
});

export default mongoose.model("User", userSchema);
