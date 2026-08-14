import mongoose, { Schema, Document } from "mongoose";

export interface IDonations extends Document {
  date: Date;
  donorName: string;
  type: "Cash" | "Kind";
  description?: string;
  amount: number;
  contact: string;
  createdAt: Date;
}

const donationSchema = new Schema<IDonations>({
  date: { type: Date, required: true },
  donorName: { type: String, required: true },
  type: { type: String, required: true, enum: ["Cash", "Kind"] },
  description: { type: String },
  amount: { type: Number, required: true },
  contact: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Donation = mongoose.model<IDonations>("Donation", donationSchema);
export default Donation;
