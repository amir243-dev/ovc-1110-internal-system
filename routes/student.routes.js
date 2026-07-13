const express = require("express");
const router = express.Router();
const { createStudent } = require("../controllers/student.controller");

// @route   POST /api/students
router.post("/", createStudent);

module.exports = router;
