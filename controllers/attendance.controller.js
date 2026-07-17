const Attendance = require("../models/attendance.model");
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

module.exports = { createAttendance, getAttendance };
