import express from "express";
import {
  createStudent,
  getStudents,
  getStudentByID,
} from "../controllers/student.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

// @route   POST /api/students
router.post("/", protect, createStudent);

// @route   GET /api/students
router.get("/", protect, getStudents);

// @route GET /api/students/:id
router.get("/:id", protect, getStudentByID);

export default router;
