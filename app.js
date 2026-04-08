const express = require('express');
const app = express();

app.use(express.json());

const productRoutes = require('./src/routes/productRoutes');

app.use('/produtos', productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`☕ Cafeteria API Online em http://localhost:${PORT}`);
});