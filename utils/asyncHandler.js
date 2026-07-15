// @desc    Wraps async controller functions to catch errors automatically
const asyncHandler = (fn) => {
  return (req, res, next) => {
    // fn(req, res, next) executes the actual controller.
    // .catch(next) means: if the promise rejects (throws an error),
    // pass that error directly to the next middleware (which is our errorHandler).
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

module.exports = asyncHandler;
