import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import staffRoutes from "./routes/staff.routes";
import studentRoutes from "./routes/student.routes";
import reportRoutes from "./routes/report.routes";
import attendanceRoutes from "./routes/attendance.routes";
import expenseRoutes from "./routes/expense.routes";
import donationRoutes from "./routes/donation.routes";
import { errorHandler, notFound } from "./middleware/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());
// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use("/api/staff", staffRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/donations", donationRoutes);

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "System Online",
  });
});
// Handle 404 errors (routes that don't exist)
app.use(notFound);

// Central error handler
app.use(errorHandler);

export default app;
