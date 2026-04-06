require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// --- IMPORTANDO AS ROTAS ---
const employeeRoutes = require('./src/routes/employeeRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

// --- USANDO AS ROTAS ---
app.use('/employees', employeeRoutes);
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`☕ API Cafeteria rodando na porta ${PORT}`);
});