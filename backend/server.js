import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import morgan from "morgan";
const app = express();
dotenv.config();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(
  PORT,
  console.log(
    `app is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
