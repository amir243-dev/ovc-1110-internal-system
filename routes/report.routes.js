const express = require("express");
const router = express.Router();
const {
  createReport,
  getReport,
  getReportByID,
} = require("../controllers/report.controller");

router.post("/", createReport);
router.get("/", getReport);
router.get("/:id", getReportByID);

module.exports = router;
