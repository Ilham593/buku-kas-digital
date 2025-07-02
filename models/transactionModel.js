import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["pemasukan", "pengeluaran"],
    },
    amount: {
      type: Number,
      required: [true, "jumlah uang tidak boloh kosong"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "deskripsi tidak boleh kosong"],
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;