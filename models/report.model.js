const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  program: { type: String, required: true },
  location: { type: String, required: true },
  numberOfChildren: { type: Number, required: true },
  numberOfStaff: { type: Number, required: true },

  // These are arrays of strings. The frontend will send an array like ["Activity 1", "Activity 2"]
  activities: [{ type: String }],
  challenges: [{ type: String }],
  solutions: [{ type: String }],
  submittedBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", reportSchema);
