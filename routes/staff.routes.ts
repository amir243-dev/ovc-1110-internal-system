import express from "express";
import { registerStaff, loginStaff } from "../controllers/staff.controller";
const router = express.Router();

router.post("/register", registerStaff);
router.post("/login", loginStaff);

export default router;
