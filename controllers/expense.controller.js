const Expense = require("../models/expense.model");
const asyncHandler = require("../utils/asyncHandler");

const createExpense = asyncHandler(async (req, res) => {
  const expense = await Expense.create(req.body);
  res.status(201).json(expense);
});

// =================================

const getExpenses = asyncHandler(async (req, res) => {
  const expenses = await Expense.find();
  res.status(200).json(expenses);
});

module.exports = { createExpense, getExpenses };
