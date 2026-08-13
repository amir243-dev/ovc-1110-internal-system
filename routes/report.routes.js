const express = require("express");
const router = express.Router();
const {
  createReport,
  getReport,
  getReportByID,
} = require("../controllers/report.controller");
const { protect, adminOnly } = require("../middleware/auth.middleware");

router.post("/", protect, createReport);
router.get("/", protect, getReport);
router.get("/:id", protect, getReportByID);

module.exports = router;
