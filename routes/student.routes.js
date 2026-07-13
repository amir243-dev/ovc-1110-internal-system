const express = require("express");
const router = express.Router();
const {
  createStudent,
  getStudents,
} = require("../controllers/student.controller");

// @route   POST /api/students
router.post("/", createStudent);

// @route   GET /api/students
router.get("/", getStudents);

module.exports = router;
