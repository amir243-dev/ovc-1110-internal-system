import express from "express";
import {
  createReport,
  getReport,
  getReportByID,
} from "../controllers/report.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, createReport);
router.get("/", protect, getReport);
router.get("/:id", protect, getReportByID);

export default router;
