const express = require("express");
const router = express.Router();
const {
  createAttendance,
  getAttendance,
  getAttendanceByID,
} = require("../controllers/attendance.controller");

router.post("/", createAttendance);
router.get("/", getAttendance);
router.get("/:id", getAttendanceByID);

module.exports = router;
