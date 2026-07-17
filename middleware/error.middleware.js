// @desc    Handles all operational errors thrown in the app
const errorHandler = (err, req, res, next) => {
  // If headers are already sent, delegate to default Express handler
  if (res.headersSent) {
    return next(err);
  }

  let error = { ...err };
  error.message = err.message;
  // Log error to console for my own debugging
  console.log(err);

  // 1. Mongoose Bad ObjectId (e.g., GET /api/students/invalid-id)
  if (err.name === "CastError") {
    const message = "Resource not Found";
    error = { message, statusCode: 404 };
  }

  // 2. Mongoose Duplicate Key
  if (err.code === 11000) {
    // Extract the field name that caused the duplicate error
    const field = Object.keys(err.keyValue)[0];
    const message = `Duplicate value for ${field}. Please use another value`;
    error = { message, statusCode: 400 };
  }

  // 3. Mongoose Validation Error (e.g., missing required field, bad enum)
  if (err.name === "ValidationError") {
    // Object.values(err.errors) gets all the specific field errors
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error = { message, statusCode: 400 };
  }
  const statusCode =
    error.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);

  res.status(statusCode).json({
    message: error.message,
    // Show stack trace in development, hide in production
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

// @desc    Handles 404 Not Found routes
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

module.exports = { errorHandler, notFound };
