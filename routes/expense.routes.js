const express = require("express");
const router = express.Router();
const {
  createExpense,
  getExpenses,
  getExpenseByID,
} = require("../controllers/expense.controller");

router.post("/", createExpense);
router.get("/", getExpenses);
router.get("/:id", getExpenseByID);

module.exports = router;
