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

module.exports = { createExpense, getExpenses };
