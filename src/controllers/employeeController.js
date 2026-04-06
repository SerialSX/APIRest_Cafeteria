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

module.exports = {
  createEmployee,
  getEmployees
};