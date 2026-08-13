const express = require("express");
const router = express.Router();
const {
  createAttendance,
  getAttendance,
  getAttendanceByID,
} = require("../controllers/attendance.controller");
const { protect, adminOnly } = require("../middleware/auth.middleware");

router.post("/", protect, createAttendance);
router.get("/", protect, getAttendance);
router.get("/:id", protect, getAttendanceByID);

module.exports = router;
