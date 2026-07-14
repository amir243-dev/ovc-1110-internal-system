const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/student.routes");
const reportRoutes = require("./routes/report.routes");
const attendanceRoutes = require("./routes/attendance.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/attendance", attendanceRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "System Online",
  });
});

module.exports = app;
