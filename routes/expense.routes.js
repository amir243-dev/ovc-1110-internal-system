const express = require("express");
const router = express.Router();
const {
  createExpense,
  getExpenses,
} = require("../controllers/expense.controller");

router.post("/", createExpense);
router.get("/", getExpenses);

module.exports = router;
