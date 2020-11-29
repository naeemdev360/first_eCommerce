import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import colors from "colors";
import connectDB from "./config/db.js";
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("api is running");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(
  PORT,
  console.log(
    `app is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
