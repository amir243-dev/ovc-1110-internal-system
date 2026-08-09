import express from "express";
import {
  createExpense,
  getExpenses,
  getExpenseByID,
} from "../controllers/expense.controller";
const router = express.Router();

router.post("/", createExpense);
router.get("/", getExpenses);
router.get("/:id", getExpenseByID);

export default router;
