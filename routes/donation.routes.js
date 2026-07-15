const express = require("express");
const router = express.Router();
const {
  createDonation,
  getDonations,
} = require("../controllers/donation.controller");

router.post("/", createDonation);
router.get("/", getDonations);

module.exports = router;
