const Expense = require("../models/expense.model");
const asyncHandler = require("../utils/asyncHandler");
const sendResponse = require("../utils/apiResponse");

const createExpense = asyncHandler(async (req, res) => {
  const expense = await Expense.create(req.body);
  sendResponse(res, 201, expense, "Expense saved Successfully");
});

// =================================

const getExpenses = asyncHandler(async (req, res) => {
  const expenses = await Expense.find();
  sendResponse(res, 200, expenses, "Expenses retrieved Sucessfully");
});

// ====================================

const getExpenseByID = asyncHandler(async (req, res, next) => {
  // 1. Try to find the student
  const expense = await Expense.findById(req.params.id);

  // 2. If no student exists, return 404
  if (!expense) {
    res.status(404);
    throw new Error("Expense not Found");
  }

  // 3. If found, return 200
  sendResponse(res, 200, expense, "Expense Retrieved successfully");
});

module.exports = { createExpense, getExpenses, getExpenseByID };
