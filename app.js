const express = require('express');
const app = express();

app.use(express.json());

const productRoutes = require('./src/routes/productRoutes');

app.use('/produtos', productRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});