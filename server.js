// 1. mengimport express
import express from "express";

// 2. membuat intance dari aplikasi express
const app = express();

// 3. menentukan port
const PORT = process.env.PORT || 3000;

// 4. membuat route unutk pengujian
app.get('/', (req, res) => {
  res.send('halo server buku berjalan lancar')
})


// 5. menjalankan server
app.listen(PORT, () => {
  console.log(`server berjalan di http://localhost:${PORT}`);
})
