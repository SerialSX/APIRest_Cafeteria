const prisma = require('../prismaClient');

exports.createProduct = async (req, res) => {
  try {
    const { nome, categoria, preco, tamanho, disponibilidade } = req.body;

    const product = await prisma.product.create({
      data: {
        nome,
        categoria,
        preco: parseFloat(preco),
        tamanho,
        disponibilidade: disponibilidade !== undefined ? disponibilidade : true,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar produto.", message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { id: 'asc' }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });

    if (!product) return res.status(404).json({ error: "Produto não encontrado." });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, categoria, preco, tamanho, disponibilidade } = req.body;

    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        categoria,
        preco: preco ? parseFloat(preco) : undefined,
        tamanho,
        disponibilidade
      },
    });
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: "Erro ao atualizar: Produto não encontrado." });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Erro ao deletar: Produto não encontrado." });
  }
};