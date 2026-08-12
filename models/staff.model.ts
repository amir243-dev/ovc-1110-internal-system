import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IStaff extends Document {
  name: string;
  email: string;
  password: string;
  role: "admin" | "staff";
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const staffSchema = new Schema<IStaff>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "staff"], default: "staff" },
  },
  { timestamps: true },
);

// Hash password before saving
staffSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

staffSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Staff = mongoose.model<IStaff>("Staff", staffSchema);

export default Staff;
