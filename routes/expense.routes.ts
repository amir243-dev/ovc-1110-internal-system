import express from "express";
import {
  createExpense,
  getExpenses,
  getExpenseByID,
} from "../controllers/expense.controller";
import { protect, adminOnly } from "../middleware/auth.middleware";
const router = express.Router();

router.post("/", protect, createExpense);
router.get("/", protect, getExpenses);
router.get("/:id", protect, getExpenseByID);

export default router;
