import express from "express";
import {
  addTransaction,
  getTransactions,
  deleteTransaction,
  updateTransaction,
  getTransactionById,
} from "../controllers/transactionController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").get(protect, getTransactions).post(protect, addTransaction);

router
  .route("/:id")
  .delete(protect, deleteTransaction)
  .patch(protect, updateTransaction)
  .get(protect, getTransactionById);

export default router;
