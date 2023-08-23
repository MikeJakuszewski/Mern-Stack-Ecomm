import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.get("/", getProducts);
router.get("/:id", getProductById);

//Admin
router.post("/", protect, admin, createProduct);

export default router;
