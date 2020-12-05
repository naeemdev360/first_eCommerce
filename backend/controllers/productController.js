import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//@Des  Find All Products
//@Route GET /api/products
//@Access public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

//@Des  Find Product By Id
//@Route GET /api/products/:id
//@Access public

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new Error("Product not found");
  res.status(200).json(product);
});
