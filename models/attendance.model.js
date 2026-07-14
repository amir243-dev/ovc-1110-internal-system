const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  program: { type: String, required: true },
  date: { type: Date, required: true },

  // Array of strings for the MVP. The frontend will send an array of student names.
  // We are avoiding ObjectIds here to keep the MVP simple and avoid messy .populate() chains.
  students: [{ type: String }],
  supervisor: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
