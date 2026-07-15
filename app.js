const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/student.routes");
const reportRoutes = require("./routes/report.routes");
const attendanceRoutes = require("./routes/attendance.routes");
const expenseRoutes = require("./routes/expense.routes");
const donationRoutes = require("./routes/donation.routes");
const { errorHandler, notFound } = require("./middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/donations", donationRoutes);

// Handle 404 errors (routes that don't exist)
app.use(notFound);

// Central error handler
app.use(errorHandler);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "System Online",
  });
});

module.exports = app;
