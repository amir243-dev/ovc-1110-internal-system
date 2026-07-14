const express = require("express");
const router = express.Router();
const {
  createAttendance,
  getAttendance,
} = require("../controllers/attendance.controller");

router.post("/", createAttendance);
router.get("/", getAttendance);

module.exports = router;
