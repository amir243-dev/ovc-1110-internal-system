import { Request, Response, NextFunction } from "express";
import { prisma } from "../utils/prismaClient";
import asyncHandler from "../utils/asyncHandler";
import sendResponse from "../utils/apiResponse";
import { send } from "node:process";

const createExpense = asyncHandler(async (req: Request, res: Response) => {
  const { date, item, amount, approvedBy } = req.body;

  const expense = await prisma.expense.create({
    data: {
      date: new Date(date), // converts "2026-07-17" to proper DateTime
      item,
      amount,
      approvedBy,
    },
  });
  sendResponse(res, 201, expense, "Expense saved Successfully");
});

// =================================

const getExpenses = asyncHandler(async (req: Request, res: Response) => {
  const expenses = await prisma.expense.findMany({
    orderBy: { createdAt: "desc" },
  });
  sendResponse(res, 200, expenses, "Expenses retrieved Sucessfully");
});

// ====================================

const getExpenseByID = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // 1. Try to find the student
    const expense = await prisma.expense.findUnique({
      where: { id: Number(req.params.id) },
    });

    // 2. If no student exists, return 404
    if (!expense) {
      res.status(404);
      throw new Error("Expense not Found");
    }

    // 3. If found, return 200
    sendResponse(res, 200, expense, "Expense Retrieved successfully");
  },
);

// ===========================================

const deleteExpense = asyncHandler(async (req: Request, res: Response) => {
  const expense = await prisma.expense.findUnique({
    where: { id: Number(req.params.id) },
  });
  if (!expense) {
    res.status(404);
    throw new Error("Expense not Found");
  }

  await prisma.expense.delete({
    where: { id: Number(req.params.id) },
  });
  sendResponse(res, 200, null, "Expense deleted successfully");
});

export { createExpense, getExpenses, getExpenseByID, deleteExpense };
