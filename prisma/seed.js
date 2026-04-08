require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Semeando cardápio...');

  const produtos = [
    {
      nome: 'Espresso Italiano',
      categoria: 'Cafés',
      preco: 8.50,
      tamanho: '50ml',
      disponibilidade: true,
    },
    {
      nome: 'Cappuccino Chocolate',
      categoria: 'Cafés',
      preco: 12.00,
      tamanho: '200ml',
      disponibilidade: true,
    },
    {
      nome: 'Cookie de Baunilha',
      categoria: 'Doces',
      preco: 7.00,
      tamanho: '80g',
      disponibilidade: true,
    }
  ];

  for (const item of produtos) {
    await prisma.product.create({
      data: item
    });
  }

  console.log('✅ Banco populado com sucesso!');
}

main()
  .catch((e) => {
    console.error("❌ Erro ao semear:");
    console.error(e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });