import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExcists = await User.findOne({ email });

    if (userExcists) {
      return res
        .status(400)
        .json({ success: false, error: "Email sudah terdaftar" });
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    if (newUser) {
      res.status(201).json({
        success: true,
        data: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        }
      });
    }

    if (!newUser) {
      res.status(400).json({
        success: false,
        error: "Gagal membuat user",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
