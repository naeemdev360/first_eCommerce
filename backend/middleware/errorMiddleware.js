const notFound = (req, res, next) => {
  res.status(404);
  throw new Error(`route not found - ${req.originalUrl}`);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: error.message,
    stack: process.env.NODE_ENV === "development" ? error.stack : null,
  });
};

export { notFound, errorHandler };
