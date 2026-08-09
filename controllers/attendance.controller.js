import Attendance from "../models/attendance.model";
const asyncHandler = require("../utils/asyncHandler");
const sendResponse = require("../utils/apiResponse");

const createAttendance = asyncHandler(async (req, res) => {
  const attendance = await Attendance.create(req.body);
  sendResponse(res, 201, attendance, "Attendance Entry saved Successfully");
});

// ===============================

const getAttendance = asyncHandler(async (req, res) => {
  const attendance = await Attendance.find();
  sendResponse(
    res,
    200,
    attendance,
    "Atendance Entries retrieved Successfully",
  );
});

// =====================================
const getAttendanceByID = asyncHandler(async (req, res, next) => {
  // 1. Try to find the student
  const attendance = await Attendance.findById(req.params.id);

  // 2. If no student exists, return 404
  if (!attendance) {
    res.status(404);
    throw new Error("Attendance not Found");
  }

  // 3. If found, return 200
  sendResponse(res, 200, attendance, "Attendance Retrieved successfully");
});

module.exports = { createAttendance, getAttendance, getAttendanceByID };
