const Report = require("../models/report.model");
const asyncHandler = require("../utils/asyncHandler");
const sendResponse = require("../utils/apiResponse");

const createReport = asyncHandler(async (req, res) => {
  const report = await Report.create(req.body);
  sendResponse(res, 201, report, "Report created Successfully");
});

// ================================================

const getReport = asyncHandler(async (req, res) => {
  const reports = await Report.find();
  sendResponse(res, 200, reports, "Reports retrieved Successfully");
});

// ==============================================

module.exports = { createReport, getReport };
