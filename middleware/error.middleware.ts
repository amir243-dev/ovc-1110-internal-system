import { Request, Response, NextFunction } from "express";

interface MongooseError extends Error {
  code?: number;
  keyValue?: Record<string, any>;
  errors?: Record<string, { message: string }>;
  statusCode?: number;
}

const errorHandler = (
  err: MongooseError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) {
    return next(err);
  }

  let error: any = { ...err };
  error.message = err.message;

  console.log(err);

  if (err.name === "CastError") {
    error = { message: "Resource not found", statusCode: 404 };
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0];
    error = {
      message: `Duplicate value for ${field}. Please use another value`,
      statusCode: 400,
    };
  }

  if (err.name === "ValidationError" && err.errors) {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error = { message, statusCode: 400 };
  }

  const statusCode =
    error.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);

  res.status(statusCode).json({
    message: error.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export { errorHandler, notFound };
