import { Request, Response, NextFunction } from "express";
import Student from "../models/student.model";
import asyncHandler from "../utils/asyncHandler";
import sendResponse from "../utils/apiResponse";
// =======================================================
// 1. TYPING THE PARAMETERS
// In JS, req and res were just objects.
// In TS, we import their types from Express so the editor knows what methods they have (like res.status()).
// NextFunction is the type for 'next'. It tells TS this function can accept an error to pass down the chain (to your error.middleware).

// @desc    Create a new student

const createStudent = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const student = await Student.create(req.body);
    sendResponse(res, 201, student, "Student created successfully");
  },
);

// =======================================================
// @desc    Get all students

const getStudents = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const students = await Student.find();
    sendResponse(res, 200, students, "Students retrieved successfully");
  },
);

// ===========================================================
// @desc    Get single student by ID

const getStudentByID = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const student = await Student.findById(req.params.id);
    if (!student) {
      res.status(400);
      throw new Error("Student not found");
    }
    sendResponse(res, 200, student, "Student retrieved successfully");
  },
);
// /=======================================================
export { createStudent, getStudents, getStudentByID };
