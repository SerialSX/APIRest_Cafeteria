const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    try {
        const product = await prisma.product.create({
            data: req.body
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: "Erro ao cadastrar produto. Verifique os campos." });
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar produtos." });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await prisma.product.findUnique({
            where: { id: id }
        });
        if (!product) return res.status(404).json({ error: "Produto não encontrado." });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar o produto." });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await prisma.product.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Erro ao atualizar produto. Verifique o ID ou os dados." });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.product.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Erro ao deletar produto. Verifique se o ID existe." });
    }
});


module.exports = router;