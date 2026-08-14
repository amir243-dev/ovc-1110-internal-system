import express from "express";
import {
  createAttendance,
  getAttendance,
  getAttendanceByID,
} from "../controllers/attendance.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, createAttendance);
router.get("/", protect, getAttendance);
router.get("/:id", protect, getAttendanceByID);

export default router;
