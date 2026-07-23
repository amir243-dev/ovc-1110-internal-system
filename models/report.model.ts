import mongoose, { Schema, Document } from "mongoose";

// THE INTERFACE FOR TS LAND
export interface IReports extends Document {
  date: Date;
  program: string;
  location: string;
  numberOfChildren: number;
  numberOfStaff: number;
  activities?: string[];
  challenges?: string[];
  solutions?: string[];
  submittedBy: string;
  createdAt: Date;
}

const reportSchema = new Schema<IReports>({
  date: { type: Date, required: true },
  program: { type: String, required: true },
  location: { type: String, required: true },
  numberOfChildren: { type: Number, required: true },
  numberOfStaff: { type: Number, required: true },

  // These are arrays of strings. The frontend will send an array like ["Activity 1", "Activity 2"]
  activities: [{ type: String }],
  challenges: [{ type: String }],
  solutions: [{ type: String }],
  submittedBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Report = mongoose.model<IReports>("Report", reportSchema);
export default Report;
