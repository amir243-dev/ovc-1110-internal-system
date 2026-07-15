const Report = require("../models/report.model");
const asyncHandler = require("../utils/asyncHandler");

const createReport = asyncHandler(async (req, res) => {
  const report = await Report.create(req.body);
  res.status(201).json(report);
});

// ================================================

const getReport = asyncHandler(async (req, res) => {
  const reports = await Report.find();
  res.status(200).json(reports);
});

// ==============================================

module.exports = { createReport, getReport };
