import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import transactionRouter from "./routes/transactionRoutes.js";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("halo server buku berjalan lancar");
});

app.use("/api/transactions", transactionRouter);


app.listen(PORT, () => {
  console.log(`server berjalan di http://localhost:${PORT}`);
});
