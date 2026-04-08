const express = require('express');
const router = express.Router();
const prisma = require('../prismaClient'); // Usando o client unificado que arrumamos

// 1. LISTAR TODOS (ESSA É A QUE ESTAVA FALTANDO E DANDO 404!)
router.get('/', async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar produtos." });
    }
});

// 2. BUSCAR POR ID (CORRIGIDA COM NUMBER() PARA O POSTGRES)
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await prisma.product.findUnique({
            where: { id: Number(id) }
        });
        if (!product) return res.status(404).json({ error: "Produto não encontrado." });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar o produto." });
    }
});

// 3. CRIAR PRODUTO
router.post('/', async (req, res) => {
    try {
        const product = await prisma.product.create({
            data: req.body
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: "Erro ao cadastrar produto." });
    }
});

// 4. ATUALIZAR PRODUTO
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await prisma.product.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar produto." });
    }
});

// 5. DELETAR PRODUTO
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.product.delete({
            where: { id: Number(id) }
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: "Erro ao deletar produto." });
    }
});

module.exports = router;