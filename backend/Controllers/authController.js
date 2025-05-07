import User from "../Model/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const test = (req, res) => {
  res.status(200).json({ message: "Auth controller works!" });
};

// Signup
export const signup = async (req, res) => {
  try {
    const { name, email, password, role, studentDetails, teacherDetails } =
      req.body;

    console.log("Signup request received:", { name, email, role });

    // Check if user already exists
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "Email is already in use." });
    }

    // Create user data object with role-specific details
    const userData = {
      name,
      email,
      password,
      role,
    };

    // Add student details if registering as a student
    if (role === "student" && studentDetails) {
      // Validate grade
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

      if (
        studentDetails.grade &&
        !availableGrades.includes(studentDetails.grade)
      ) {
        return res.status(400).json({ message: "Invalid grade selection" });
      }

      // Validate subjects/interest tags
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

      if (
        studentDetails.interestTags &&
        studentDetails.interestTags.some(
          (tag) => !availableSubjects.includes(tag)
        )
      ) {
        return res
          .status(400)
          .json({ message: "One or more selected subjects are invalid" });
      }

      userData.studentDetails = studentDetails;
    }

    // Add teacher details if registering as a teacher
    if (role === "teacher" && teacherDetails) {
      userData.teacherDetails = teacherDetails;
    }

    // Create and save the new user
    const user = new User(userData);
    await user.save();

    // Generate token for immediate login after signup
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Return success response
    res.status(201).json({
      message: "User registered successfully!",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
        studentDetails: user.studentDetails,
        teacherDetails: user.teacherDetails,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);

    // Handle validation errors specifically
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        message: "Validation failed",
        details: messages.join(", "),
      });
    }

    res.status(500).json({
      message: "Failed to create user account.",
      error: error.message,
    });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.isPasswordMatch(password))) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
        studentDetails: user.studentDetails,
        teacherDetails: user.teacherDetails,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error.", error: error.message });
  }
};
