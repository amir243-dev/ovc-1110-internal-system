import { Request, Response } from "express";
import Staff from "../models/staff.model";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler";
import sendResponse from "../utils/apiResponse";

const SECRET = process.env.JWT_SECRET || "fallback-dev-secret";

// @desc    Register new staff (so you can create a user to test login)

const registerStaff = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  const staffExists = await Staff.findOne({ email });
  if (staffExists) {
    res.status(400);
    throw new Error("Staff already exists");
  }

  const staff = await Staff.create({
    name,
    email,
    password,
    role,
  });
  sendResponse(
    res,
    201,
    {
      id: staff._id,
      name: staff.name,
      email: staff.email,
      role: staff.role,
    },
    "Registration successful",
  );
});

// @desc    Login staff
const loginStaff = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const staff = await Staff.findOne({ email });
  if (!staff) {
    res.status(401);
    throw new Error("Invalid email or Password");
  }

  const isMatch = await staff.matchPassword(password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid Password");
  }
  const token = jwt.sign(
    { id: staff._id, name: staff.name, email: staff.email, role: staff.role },
    SECRET,
    { expiresIn: "1h" },
  );
  sendResponse(res, 200, { token }, "Login successful");
});

export { registerStaff, loginStaff };
