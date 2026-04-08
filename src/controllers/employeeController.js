const prisma = require('../prismaClient');

const createEmployee = async (req, res) => {
  try {
    const { name, role, shift, cpf, phone } = req.body;
    const employee = await prisma.employee.create({
      data: { name, role, shift, cpf, phone }
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar funcionário." });
  }
};

const getEmployees = async (req, res) => {
  const employees = await prisma.employee.findMany();
  res.json(employees);
};

const updateEmployee = async (req, res) => {
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
};

// 4. Remover da Equipe (DELETE)
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.employee.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Erro ao deletar funcionário." });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee
};