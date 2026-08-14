import { Request, Response, NextFunction } from "express";
import Report from "../models/report.model";
import asyncHandler from "../utils/asyncHandler";
import sendResponse from "../utils/apiResponse";

const createReport = asyncHandler(async (req: Request, res: Response) => {
  const report = await Report.create(req.body);
  sendResponse(res, 201, report, "Report created Successfully");
});

// ================================================

const getReport = asyncHandler(async (req: Request, res: Response) => {
  const reports = await Report.find();
  sendResponse(res, 200, reports, "Reports retrieved Successfully");
});

// ==============================================

const getReportByID = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // 1. Try to find the student
    const report = await Report.findById(req.params.id);

    // 2. If no student exists, return 404
    if (!report) {
      res.status(404);
      throw new Error("Report not Found");
    }

    // 3. If found, return 200
    sendResponse(res, 200, report, "Report Retrieved successfully");
  },
);

export { createReport, getReport, getReportByID };
