import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
const port = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});

const startDB = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

startDB();