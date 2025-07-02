import Transaction from "../models/transactionModel.js";

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
