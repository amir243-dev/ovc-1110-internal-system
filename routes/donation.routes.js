const express = require("express");
const router = express.Router();
const {
  createDonation,
  getDonations,
  getDonationByID,
} = require("../controllers/donation.controller");

router.post("/", createDonation);
router.get("/", getDonations);
router.get("/:id", getDonationByID);

module.exports = router;
