const prisma = require('../prismaClient');

const createEmployee = async (req, res) => {
  try {
    let { name, role, shift, cpf, phone } = req.body;

    const cpfLimpo = cpf.replace(/\D/g, '');
    if (cpfLimpo.length === 11) {
      cpf = cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    const phoneLimpo = phone.replace(/\D/g, '');
    if (phoneLimpo.length === 11) {
      phone = phoneLimpo.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (phoneLimpo.length === 10) {
      phone = phoneLimpo.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }

    const employee = await prisma.employee.create({
      data: { name, role, shift, cpf, phone }
    });

    res.status(201).json(employee);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: "Este CPF já está cadastrado no sistema." });
    }
    res.status(400).json({ error: "Erro ao cadastrar funcionário.", message: error.message });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany({
      orderBy: { id: 'asc' }
    });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar funcionários." });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    let { name, role, shift, phone, cpf } = req.body;

    if (cpf) {
      const c = cpf.replace(/\D/g, '');
      if (c.length === 11) cpf = c.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    if (phone) {
      const p = phone.replace(/\D/g, '');
      if (p.length >= 10) {
        phone = p.length === 11
          ? p.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
          : p.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
      }
    }

    const updated = await prisma.employee.update({
      where: { id: parseInt(id) },
      data: { name, role, shift, phone, cpf }
    });
    res.json(updated);
  } catch (error) {
    res.status(404).json({ error: "Funcionário não encontrado ou erro na atualização." });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.employee.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Erro ao deletar: funcionário não existe." });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee
};