const express = require("express");
const router = express.Router();
const { createReport, getReport } = require("../controllers/report.controller");

router.post("/", createReport);
router.get("/", getReport);

module.exports = router;
