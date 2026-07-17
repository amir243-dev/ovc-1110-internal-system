const Donation = require("../models/donation.model");
const asyncHandler = require("../utils/asyncHandler");
const sendResponse = require("../utils/apiResponse");

const createDonation = asyncHandler(async (req, res) => {
  const donation = await Donation.create(req.body);
  sendResponse(res, 201, donation, "Donation saved successfully");
});

const getDonations = asyncHandler(async (req, res) => {
  const donations = await Donation.find();
  sendResponse(res, 200, donations, "Donations retrieved Successfully");
});

module.exports = { createDonation, getDonations };
