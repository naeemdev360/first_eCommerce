import jwt from "jsonwebtoken";
import cartchAsync from "express-async-handler";
import User from "../models/userModel.js";

export const protect = cartchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    res.status(402);
    throw new Error("You are not login");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id).select("-password");
  req.user = {
    _id: user._id,
    name: user.name,
    email: user.email,
  };

  next();
});
