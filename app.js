require('dotenv').config(); 

const express = require('express');
const basicAuth = require('./src/middlewares/basicAuth'); 
const productRoutes = require('./src/routes/productRoutes');
const employeeRoutes = require('./src/routes/employeeRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

const app = express();
app.use(express.json());

app.use(basicAuth);

app.use('/produtos', productRoutes);
app.use('/funcionarios', employeeRoutes);
app.use('/pedidos', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor a correr na porta ${PORT} ☕`));