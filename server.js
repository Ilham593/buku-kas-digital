import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import transactionRouter from "./routes/transactionRoutes.js";
import userRouter from "./routes/userRoutes.js";
connectDB();

const app = express();
// cors origin diatur disini yang komplex
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
  "http://localhost:3003",
  "http://localhost:5173",
  "https://buku-kas-digital.vercel.app",
];

const options = {
  origin: allowedOrigins,
};
app.use(cors(options));

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("halo server buku berjalan lancar");
});

app.use("/api/transactions", transactionRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server berjalan di http://localhost:${PORT}`);
});
