import express from "express";
import {
  addTransaction,
  getTransactions,
  deleteTransaction,
  updateTransaction,
  getTransactionById
} from "../controllers/transactionController.js";

const router = express.Router();

router.route("/").get(getTransactions).post(addTransaction);

router.route("/:id").delete(deleteTransaction).patch(updateTransaction).get(getTransactionById);

export default router;
