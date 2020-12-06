import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

//@Des  Create new order
//@Route POST /api/orders
//@Access protected

export const addOrderItems = asyncHandler(async (req, res) => {
  if (req.body.orderItems && req.body.orderItems.length === 0) {
    res.status(400);
    throw new Error("No Order Items");
  } else {
    const order = await Order.create({ ...req.body, user: req.user._id });
    res.status(201).json(order);
  }
});
