const Student = require("../models/student.model");
const asyncHandler = require("../utils/asyncHandler");

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

  // 4. Return the created student
  return res.status(201).json(student);
  // If Mongoose validation fails (e.g., invalid enum for gender), it throws an error
});

// =======================================================
// @desc    Get all students

const getStudents = asyncHandler(async (req, res) => {
  // .find() with no arguments returns all documents in the collection
  const students = await Student.find();
  res.status(200).json(students);
});

// /=======================================================
module.exports = { createStudent, getStudents };
