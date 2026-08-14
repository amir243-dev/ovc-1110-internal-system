import express from "express";
import {
  createDonation,
  getDonations,
  getDonationByID,
} from "../controllers/donation.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, createDonation);
router.get("/", protect, getDonations);
router.get("/:id", protect, getDonationByID);

export default router;
