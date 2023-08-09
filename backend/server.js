import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
const port = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

const startDB = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on Port ${port}`);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

startDB();
