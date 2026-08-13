import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "fallback-dev-secret";

// Extend Express Request type so TypeScript knows about req.user

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const protect = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401);
    throw new Error("Not authorized - no token");
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // attach user payload to request
    next();
  } catch (err) {
    res.status(401);
    throw new Error("Not authorized - token invalid or expired");
  }
};

const adminOnly = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== "admin") {
    res.status(403);
    throw new Error("Forbidden - admins only");
  }
  next();
};

export { protect, adminOnly };
