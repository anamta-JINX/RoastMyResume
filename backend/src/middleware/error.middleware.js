import ApiError from "../utils/ApiError.js";

export function asyncHandler(controllerFunction) {
  return (req, res, next) => {
    Promise.resolve(controllerFunction(req, res, next)).catch(next);
  };
}

export function notFoundHandler(req, res, next) {
  next(
    new ApiError(
      404,
      "Route not found. Even this URL needs a resume makeover."
    )
  );
}

export function errorHandler(error, req, res, next) {
  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal server error.";

  if (error.name === "ValidationError") {
    statusCode = 400;
    message = "Validation failed.";
  }

  if (error.code === "LIMIT_FILE_SIZE") {
    statusCode = 400;
    message = "File too large. Upload a smaller resume file.";
  }

  if (error.code === "LIMIT_UNEXPECTED_FILE") {
    statusCode = 400;
    message = "Unexpected file field. Use the field name: resume.";
  }

  const response = {
    success: false,
    message
  };

  if (process.env.NODE_ENV === "development") {
    response.stack = error.stack;
    response.details = error.details || null;
  }

  res.status(statusCode).json(response);
}