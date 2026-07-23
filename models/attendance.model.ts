import mongoose, { Schema, Document } from "mongoose";
// THE INTERFACE
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

  // Array of strings for the MVP. The frontend will send an array of student names.
  // We are avoiding ObjectIds here to keep the MVP simple and avoid messy .populate() chains.
  students: [{ type: String }],
  supervisor: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Attendance = mongoose.model<IAttendance>("Attendance", attendanceSchema);

export default Attendance;
