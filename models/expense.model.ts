import mongoose, { Schema, Document } from "mongoose";

export interface IExpenses extends Document {
  date: Date;
  item: string;
  amount: number;
  approvedBy: string;
  createdAt: Date;
}

const expenseSchema = new Schema<IExpenses>({
  date: { type: Date, required: true },
  item: { type: String, required: true },
  amount: { type: Number, required: true },
  approvedBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Expense = mongoose.model<IExpenses>("Expense", expenseSchema);
export default Expense;
