import express from "express";
import {
  addTransaction,
  getTransactions,
} from "../controllers/transactionController.js";

const router = express.Router();

router.route("/").get(getTransactions).post(addTransaction);

export default router;
