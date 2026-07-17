const Student = require("../models/student.model");
const asyncHandler = require("../utils/asyncHandler");
const sendResponse = require("../utils/apiResponse");

// =======================================================
// @desc    Create a new student

const createStudent = asyncHandler(async (req, res) => {
  const student = await Student.create(req.body);

  sendResponse(res, 201, student, "Student created Successfully");
});

// =======================================================
// @desc    Get all students

const getStudents = asyncHandler(async (req, res) => {
  // .find() with no arguments returns all documents in the collection
  const students = await Student.find();
  sendResponse(res, 200, students, "Students retrieved Sucessfully");
});

// ===========================================================
// @desc    Get single student by ID

const getStudentByID = asyncHandler(async (req, res, next) => {
  // 1. Try to find the student
  const student = await Student.findById(req.params.id);

  // 2. If no student exists, return 404
  if (!student) {
    res.status(404);
    throw new Error("Student not Found");
  }

  // 3. If found, return 200
  sendResponse(res, 200, student, "Student Retrieved successfully");
});
// /=======================================================
module.exports = { createStudent, getStudents, getStudentByID };
