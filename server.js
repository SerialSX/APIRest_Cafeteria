require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

// --- [STAFF/FUNCIONÁRIOS] ---
app.post('/employees', async (req, res) => {
  try {
    const { name, role, shift, cpf, phone } = req.body;
    const employee = await prisma.employee.create({
      data: { name, role, shift, cpf, phone }
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar funcionário." });
  }
});

// --- [SUA PARTE: VENDAS/PEDIDOS] ---
app.post('/orders', async (req, res) => {
  try {
    const { customerName, tableNumber, total, status, paymentMethod } = req.body;
    const order = await prisma.order.create({
      data: { customerName, tableNumber, total, status, paymentMethod }
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: "Erro ao registrar pedido." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`☕ API Cafeteria rodando em http://localhost:${PORT}`);
});


// Listar Todos os Funcionários (GET)
app.get('/employees', async (req, res) => {
  const employees = await prisma.employee.findMany();
  res.json(employees);
});

// Listar Todos os Pedidos (GET)
app.get('/orders', async (req, res) => {
  const orders = await prisma.order.findMany();
  res.json(orders);
});

// 3. Atualizar Dados (PUT)
app.put('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role, shift, phone } = req.body;
    const updated = await prisma.employee.update({
      where: { id: parseInt(id) },
      data: { name, role, shift, phone }
    });
    res.json(updated);
  } catch (error) {
    res.status(404).json({ error: "Funcionário não encontrado." });
  }
});

// 4. Remover da Equipe (DELETE)
app.delete('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.employee.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Erro ao deletar funcionário." });
  }
});