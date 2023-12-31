import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.post("/", protect, addOrderItems);
router.get("/mine", protect, getMyOrders);
router.put("/:id/pay", protect, updateOrderToPaid);
router.get("/:id", protect, getOrderById);

//admin

router.put("/:id/deliver", protect, admin, updateOrderToDelivered);
router.get("/", protect, admin, getOrders);

export default router;
