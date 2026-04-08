const prisma = require('../prismaClient');

const createOrder = async (req, res) => {
  try {
    const { customerName, tableNumber, total, status, paymentMethod } = req.body;

    const order = await prisma.order.create({
      data: {
        customerName,
        tableNumber: parseInt(tableNumber),
        total: parseFloat(total),
        status: status || "Pendente",
        paymentMethod
      }
    });

    res.status(201).json(order);
  } catch (error) {
    console.error("Erro no cadastro:", error);
    res.status(400).json({ error: "Erro ao registrar pedido.", message: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { id: 'asc' }
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pedidos." });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { customerName, tableNumber, total, status, paymentMethod } = req.body;

    const updated = await prisma.order.update({
      where: { id: parseInt(id) },
      data: {
        customerName,
        tableNumber: tableNumber ? parseInt(tableNumber) : undefined,
        total: total ? parseFloat(total) : undefined,
        status,
        paymentMethod
      }
    });
    res.json(updated);
  } catch (error) {
    res.status(404).json({ error: "Pedido não encontrado ou erro nos dados." });
  }
};

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

module.exports = {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder
};