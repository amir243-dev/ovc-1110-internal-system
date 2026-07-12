const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  // Enum restricts this field to only these exact values, preventing bad data entry.
  gender: { type: String, required: true, enum: ["Male", "Female"] },
  school: { type: String, required: true },
  guardianName: { type: String, required: true },
  guardianPhone: { type: String, rquired: true },
  needs: [{ type: String }],
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Student", studentSchema);
