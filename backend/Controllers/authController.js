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
    const { name, email, password, role } = req.body;

    // Check if user already exists
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "Email is already in use." });
    }

    // Create user data object
    const userData = { name, email, password, role };

    const user = new User(userData);
    await user.save();

    res.status(201).json({
      message: "User registered successfully!",
      user: { id: user._id, name: user.name, role: user.role },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error.", error: error.message });
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
      user: { id: user._id, name: user.name, role: user.role },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error.", error: error.message });
  }
};
