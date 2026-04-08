const express = require('express');
const productRoutes = require('./src/routes/productRoutes');
const employeeRoutes = require('./src/routes/employeeRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

const app = express();
app.use(express.json());

app.use('/produtos', productRoutes);
app.use('/funcionarios', employeeRoutes);
app.use('/pedidos', orderRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000 ☕"));