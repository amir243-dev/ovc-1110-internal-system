import mongoose, { Schema, Document } from "mongoose";

export interface IAttendance extends Document {
  program: string;
  date: Date;
  students?: string[];
  supervisor: string;
  createdAt: Date;
}

const attendanceSchema = new Schema<IAttendance>({
  program: { type: String, required: true },
  date: { type: Date, required: true },
  students: [{ type: String }],
  supervisor: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Attendance = mongoose.model<IAttendance>("Attendance", attendanceSchema);

export default Attendance;
