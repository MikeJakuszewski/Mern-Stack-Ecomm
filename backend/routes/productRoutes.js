import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.get("/", getProducts);
router.get("/:id", getProductById);

//Admin
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);

export default router;
