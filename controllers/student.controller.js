const Student = require("../models/student.model");
const asyncHandler = require("../utils/asyncHandler");
const sendResponse = require("../utils/apiResponse");

// =======================================================
// @desc    Create a new student

const createStudent = asyncHandler(async (req, res) => {
  // 1. Extract data from the request body
  const { fullName, age, gender, school, guardianName, guardianPhone, needs } =
    req.body;

  // 2. Basic validation (we will upgrade this on Day 17)
  if (
    !fullName ||
    !age ||
    !gender ||
    !school ||
    !guardianName ||
    !guardianPhone ||
    !needs
  ) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  // 3. Save to DB
  const student = await Student.create({
    fullName,
    age,
    gender,
    school,
    guardianName,
    guardianPhone,
    needs: needs || [], // Defaults to empty array if not provided
  });

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
