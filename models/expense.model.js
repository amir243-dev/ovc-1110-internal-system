const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  items: [{ type: String, required: true }],
  // Number type ensures you can do math on this later (like calculating total expenses)
  amount: { type: Number, required: true },
  approvedBy: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Expense", expenseSchema);
