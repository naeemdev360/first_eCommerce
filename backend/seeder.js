import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js";
import users from "./data/users.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import colors from "colors";
dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    const sampleUsers = await User.insertMany(users);
    const adminId = sampleUsers[0]._id;
    const sampleProducts = products.map(p => ({ ...p, user: adminId }));
    await Product.insertMany(sampleProducts);
    console.log("data imported successfully");
    process.exit(1);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log("data deleted successfully");
    process.exit(1);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
