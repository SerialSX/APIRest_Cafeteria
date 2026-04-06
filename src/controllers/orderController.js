const prisma = require('../prismaClient');

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

const getOrders = async (req, res) => {
  const orders = await prisma.order.findMany();
  res.json(orders);
};

module.exports = {
  createOrder,
  getOrders
};