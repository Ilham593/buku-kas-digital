import Transaction from "../models/transactionModel.js";

// ==========================================================
// @desc    Melihat semua transaksi
// @route   GET /api/transactions
// @access  Public

export const getTransactions = async (req, res) => {
  try {
    // ambil semua data di database
    const transaction = await Transaction.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: transaction.length,
      data: transaction,
    })
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// ==========================================================
// @desc    Menambah transaksi baru
// @route   POST /api/transactions
// @access  Public

export const addTransaction = async (req, res) => {
  try {
    const { type, amount, description } = req.body;

    const transaction = await Transaction.create({
      type,
      amount,
      description,
    });

    res.status(201).json({
      success: true,
      transaction,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
