const Attendance = require("../models/attendance.model");
const asyncHandler = require("../utils/asyncHandler");

const createAttendance = asyncHandler(async (req, res) => {
  const attendance = await Attendance.create(req.body);
  res.status(201).json(attendance);
});

// ===============================

const getAttendance = asyncHandler(async (req, res) => {
  const attendance = await Attendance.find();
  res.status(200).json(attendance);
});

module.exports = { createAttendance, getAttendance };
