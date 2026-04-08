const prisma = require('../prismaClient');

// 1. Criar Pedido (POST)
const createOrder = async (req, res) => {
  try {
    const { customerName, tableNumber, total, status, paymentMethod } = req.body;
    const order = await prisma.order.create({
      data: { customerName, tableNumber, total, status, paymentMethod }
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: "Erro ao registrar pedido." });
  }
};

// 2. Listar Pedidos (GET)
const getOrders = async (req, res) => {
  const orders = await prisma.order.findMany();
  res.json(orders);
};

// 3. Atualizar Status do Pedido (PUT)
// 3. Atualizar Dados do Pedido (PUT)
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    
    // 👇 Agora ele pega TODOS os campos que vierem no Postman
    const { customerName, tableNumber, total, status, paymentMethod } = req.body; 
    
    const updated = await prisma.order.update({
      where: { id: parseInt(id) },
      data: { customerName, tableNumber, total, status, paymentMethod }
    });
    res.json(updated);
  } catch (error) {
    res.status(404).json({ error: "Pedido não encontrado." });
  }
};
// 4. Cancelar/Deletar Pedido (DELETE)
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.order.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Erro ao deletar pedido." });
  }
};

// Atualize o exports:
module.exports = {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder
};