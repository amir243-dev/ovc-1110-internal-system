import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import connectDB from "../config/db";

beforeAll(async () => {
  await connectDB();
}, 15000); // 15s timeout for DB connection

afterAll(async () => {
  await mongoose.connection.close();
});
