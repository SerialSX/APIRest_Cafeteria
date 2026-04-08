# ☕ Sistema de Gerenciamento de Cafeteria - API REST

Este projeto é uma API REST desenvolvida para o gerenciamento de uma cafeteria, permitindo o controle de funcionários, produtos e pedidos. O sistema foi construído utilizando **Node.js**, **Express**, **Prisma ORM** e **PostgreSQL**.

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução Javascript.
* **Express**: Framework web para criação de rotas.
* **Prisma**: ORM para comunicação com o banco de dados.
* **PostgreSQL**: Banco de dados relacional.
* **Insomnia/Postman**: Para testes de requisições.

## 🛠️ Como Executar o Projeto

### 1. Clonar o repositório

git clone [https://github.com/SerialSX/APIRest_Cafeteria)

cd APIRest_Cafeteria


### 2. Instalar as Dependencias

npm install


### 3. Configurar Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto e adicione a URL de conexão com o seu banco de dados PostgreSQL:

DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/cafeteria_db?schema=public"


### 4. Configurar o Banco de Dados

Rode as migrações do Prisma para criar as tabelas no PostgreSQL:

npx prisma db push


### 5. Iniciar o servidor

npm start

## 📖 Documentação da API (Endpoints)

### Funcionarios (/funcionarios)

POST / : Cadastra um funcionário (com formatação automática de CPF e Telefone).

GET / : Lista todos os funcionários em ordem crescente.

PUT /:id : Atualiza os dados de um funcionário.

DELETE /:id : Remove um funcionário do sistema.


### Produtos (/produtos)

POST / : Cadastra um novo produto (Cafés, Comidas, etc).

GET / : Lista todos os produtos cadastrados.

GET /:id : Busca um produto específico pelo ID.

PUT /:id : Atualiza preço, nome ou disponibilidade.

DELETE /:id : Remove um produto do estoque.


### Pedidos (/pedidos)

POST / : Registra um novo pedido de cliente.

GET / : Lista todos os pedidos realizados.

PUT /:id : Atualiza o status do pedido (Pendente, Em Preparo, Entregue).

DELETE /:id : Cancela/Remove um pedido.

### ✒️ Autores

https://github.com/SerialSX

https://github.com/EdersonSouzaa

https://github.com/Joao-Emanuel-Rohsler


