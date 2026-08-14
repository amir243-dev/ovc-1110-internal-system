import express from "express";
import { registerStaff, loginStaff } from "../controllers/staff.controller";
import { protect, adminOnly } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/register", registerStaff);
router.post("/login", loginStaff);

export default router;
