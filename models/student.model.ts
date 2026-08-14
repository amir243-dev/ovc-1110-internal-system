import mongoose, { Schema, Document } from "mongoose";

export interface IStudents extends Document {
  fullName: string;
  age: number;
  gender: "Male" | "Female";
  school: string;
  guardianName: string;
  guardianPhone: string;
  needs?: string[];
  createdAt: Date;
}

const studentSchema = new Schema<IStudents>({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female"] },
  school: { type: String, required: true },
  guardianName: { type: String, required: true },
  guardianPhone: { type: String, required: true },
  needs: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

const Student = mongoose.model<IStudents>("Student", studentSchema);

export default Student;
