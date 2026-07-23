import express from "express";
import {
  createStudent,
  getStudents,
  getStudentByID,
} from "../controllers/student.controller";

const router = express.Router();

// @route   POST /api/students
router.post("/", createStudent);

// @route   GET /api/students
router.get("/", getStudents);

// @route GET /api/students/:id
router.get("/:id", getStudentByID);

export default router;
