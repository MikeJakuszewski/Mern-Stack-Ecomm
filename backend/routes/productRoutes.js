import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import checkObjectId from "../middleware/checkObjectId.js";

router.get("/", getProducts);
router.get("/top", getTopProducts);
router.get("/:id", checkObjectId, getProductById);
router.post("/:id/reviews", protect, checkObjectId, createProductReview);

//Admin
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, checkObjectId, updateProduct);
router.delete("/:id", protect, admin, checkObjectId, deleteProduct);

export default router;
