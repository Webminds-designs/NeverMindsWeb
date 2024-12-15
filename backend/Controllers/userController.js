import User from "../Model/User.js";

// Get all teachers
export const getTeachers = async (req, res) => {
  try {
    const teachers = await User.find({ role: "teacher" }).select("-password");
    res.status(200).json(teachers);
  } catch (error) {
    console.error("Error fetching teachers:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student" }).select("-password");
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Update student profile
export const updateStudentProfile = async (req, res) => {
  try {
    const { interestTags, grade, guardianName, guardianContact } = req.body;

    const user = await User.findById(req.params.id);

    if (!user || user.role !== "student") {
      return res.status(404).json({ message: "Student not found." });
    }

    // Allow only admin or the student themselves
    if (req.user.role !== "admin" && req.user.id !== user._id.toString()) {
      return res.status(403).json({ message: "Access denied." });
    }

    // Update student-specific fields
    if (interestTags) user.studentDetails.interestTags = interestTags;
    if (grade) user.studentDetails.grade = grade;
    if (guardianName) user.studentDetails.guardianName = guardianName;
    if (guardianContact) user.studentDetails.guardianContact = guardianContact;

    await user.save();

    res
      .status(200)
      .json({ message: "Student profile updated successfully!", user });
  } catch (error) {
    console.error("Error updating student profile:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Update teacher profile
export const updateTeacherProfile = async (req, res) => {
  try {
    const { contactNo, webUrl } = req.body;

    const user = await User.findById(req.params.id);

    if (!user || user.role !== "teacher") {
      return res.status(404).json({ message: "Teacher not found." });
    }

    // Allow only admin or the teacher themselves
    if (req.user.role !== "admin" && req.user.id !== user._id.toString()) {
      return res.status(403).json({ message: "Access denied." });
    }

    // Update teacher-specific fields
    if (contactNo) user.teacherDetails.contactNo = contactNo;
    if (webUrl) user.teacherDetails.webUrl = webUrl;

    await user.save();

    res
      .status(200)
      .json({ message: "Teacher profile updated successfully!", user });
  } catch (error) {
    console.error("Error updating teacher profile:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Allow only admin to delete a user
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied. Only admins can delete users." });
    }

    await user.remove();

    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
