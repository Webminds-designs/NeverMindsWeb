import express from "express";
import {
  getTeachers,
  getStudents,
  updateStudentProfile,
  updateTeacherProfile,
  deleteUser,
} from "../Controllers/userController.js";
import { authenticate, authorize } from "../middleware/authenticate.js";

const router = express.Router();

router.get("/teachers", authenticate, authorize("admin"), getTeachers);
router.get("/students", authenticate, authorize("admin"), getStudents);
router.put(
  "/student/:id",
  authenticate,
  authorize("admin", "student"),
  updateStudentProfile
);
router.put(
  "/teacher/:id",
  authenticate,
  authorize("admin", "teacher"),
  updateTeacherProfile
);
router.delete("/:id", authenticate, authorize("admin"), deleteUser);

export default router;
