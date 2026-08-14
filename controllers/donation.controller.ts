import { Request, Response } from "express";
import Donation from "../models/donation.model";
import asyncHandler from "../utils/asyncHandler";
import sendResponse from "../utils/apiResponse";

// =======================================================

const createDonation = asyncHandler(async (req: Request, res: Response) => {
  const donation = await Donation.create(req.body);
  sendResponse(res, 201, donation, "Donation saved successfully");
});

// ====================================================

const getDonations = asyncHandler(async (req: Request, res: Response) => {
  const donations = await Donation.find();
  sendResponse(res, 200, donations, "Donations retrieved Successfully");
});

// ======================================================

const getDonationByID = asyncHandler(async (req: Request, res: Response) => {
  // 1. Try to find the student
  const donation = await Donation.findById(req.params.id);

  // 2. If no student exists, return 404
  if (!donation) {
    res.status(404);
    throw new Error("Donation not Found");
  }

  // 3. If found, return 200
  sendResponse(res, 200, donation, "Donation Retrieved successfully");
});

export { createDonation, getDonations, getDonationByID };
