const express = require("express");
const router = express.Router();
const {
  createStudent,
  getStudents,
  getStudentByID,
} = require("../controllers/student.controller");

// @route   POST /api/students
router.post("/", createStudent);

// @route   GET /api/students
router.get("/", getStudents);

// @route GET /api/students/:id
router.get("/:id", getStudentByID);

module.exports = router;
