const Donation = require("../models/donation.model");
const asyncHandler = require("../utils/asyncHandler");

const createDonation = asyncHandler(async (req, res) => {
  const donation = await Donation.create(req.body);
  res.status(201).json(donation);
});

const getDonations = asyncHandler(async (req, res) => {
  const donations = await Donation.find();
  res.status(200).json(donations);
});

module.exports = { createDonation, getDonations };
