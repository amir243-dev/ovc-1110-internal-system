import express from "express";
import {
  createExpense,
  getExpenses,
  getExpenseByID,
  deleteExpense,
} from "../controllers/expense.controller";
import { protect, adminOnly } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, createExpense);
router.get("/", protect, getExpenses);
router.get("/:id", protect, getExpenseByID);

// Admin only
router.delete("/:id", protect, adminOnly, deleteExpense);

export default router;
