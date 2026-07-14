const Report = require("../models/report.model");

const createReport = async (req, res) => {
  try {
    const report = await Report.create(req.body);
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ================================================

const getReport = async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ mesage: error.message });
  }
};

// ==============================================

module.exports = { createReport, getReport };
