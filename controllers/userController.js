import User from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "Semua field harus diisi" });
    }

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
          token: generateToken(newUser._id),
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "terjadi kesalahan di server",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("password");

    if (!user) {
      return res.status(400).json({
        success: false,
        error: "User tidak ditemukan",
      });
    }

    if (!password) {
      return res.status(400).json({
        success: false,
        error: "Password tidak boleh kosong",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (isMatch) {
      res.status(200).json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        },
      });
    }

    if (!isMatch) {
      res.status(400).json({
        success: false,
        error: "Password atau email salah",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      error: "Server Error",
    });
  }
};
