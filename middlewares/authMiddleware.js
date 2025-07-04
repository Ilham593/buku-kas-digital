import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: "User tidak ditemukan, akses di tolak",
        });
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({
        success: false,
        error: "akses di tolak ,token tidak valid",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Tidak ada token, akses di tolak",
    });
  }
};
