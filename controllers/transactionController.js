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
    });
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

// ==========================================================
// @desc    Menghapus transaksi
// @route   DELETE /api/transactions/:id
// @access  Public

export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res
        .status(404)
        .json({ success: false, error: "Transaksi tidak ditemukan" });
    }

    await Transaction.findByIdAndDelete(req.params.id);

    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// ==========================================================
// @desc    Mengupdate transaksi
// @route   PUT /api/transactions/:id
// @access  Public


export const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!transaction) {
      return res
        .status(404)
        .json({ success: false, error: "Transaksi tidak ditemukan" });
    }

    return res.status(200).json({ success: true, data: transaction });
  }catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
}

// ... (kode lainnya)

// ==========================================================
// @desc    Mengambil satu transaksi berdasarkan ID
// @route   GET /api/transactions/:id
// @access  Public
export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'Transaksi tidak ditemukan',
      });
    }

    return res.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};