const express = require("express");
const router = express.Router();
const {
  createDonation,
  getDonations,
  getDonationByID,
} = require("../controllers/donation.controller");
const { protect, adminOnly } = require("../middleware/auth.middleware");

router.post("/", protect, createDonation);
router.get("/", protect, getDonations);
router.get("/:id", protect, getDonationByID);

module.exports = router;
