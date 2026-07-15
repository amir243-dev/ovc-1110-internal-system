// @desc    Handles all operational errors thrown in the app
const errorHandler = (err, req, res, next) => {
  // If headers are already sent, delegate to default Express handler
  if (req.headersSent) {
    return next(err);
  }

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: err.message,
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
