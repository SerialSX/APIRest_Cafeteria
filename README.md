# ☕ Cafeteria API - Gerenciamento Simples e Eficiente

Este projeto é uma API RESTful completa e leve desenvolvida para gerenciar uma cafeteria moderna. Nosso objetivo principal é fornecer uma plataforma veloz, segura e extremamente simples de se configurar para você fazer seus testes, desenvolver e rodar o projeto localmente e efetuar o deploy!

---

## 🛠️ Tecnologias Utilizadas na Stack

Para essa construção apostamos em um conjunto de tecnologias altamente suportado pela comunidade, focado em agilidade de desenvolvimento e pouca complexidade:

*   **Node.js + Express**: Framework minimalista que usa **JavaScript** no Back-end (com ele é possível responder rapidamente as requisições, subir APIs com pouquíssimas linhas de código);
*   **PostgreSQL**: Banco de dados relacional clássico e robusto, excelente paras estruturas do negócio;
*   **Prisma (ORM)**: A maior mágica da estrutura! Em vez de montarmos consultas pesadas em linguagem SQL à mão, o Prisma entende um código limpo e cria as tabelas por nós de forma automática, fornecendo ainda o **"Prisma Studio"**, uma ferramenta incrível para consultar nossos clientes ou produtos pelo próprio navegador!
*   **Swagger (OpenAPI)**: Usado para organizar nossa documentação técnica do sistema de forma gráfica para nosso relatório final. Através de sua própria página você descobre as rotas, os métodos (GET, POST...) e envia solicitações diretas;
*   **Render ou Railway**: As soluções gratuitas e poderosas recomendadas para expor o servidor do nosso grupo publicamente. Sem configurações complicadas, bastaram cliques;
*   **ESLint e Prettier**: Sistemas silenciosos de padronização automática que não deixam nosso código ter falhas e identam ou embelezam a sintaxe quando estamos editando os blocos.

---

## 👥 A Divisão de Tarefas da Mão de Obra do Grupo

Como toda startup promissora, este projeto de sistema de controle para Cafeteria, rodou com nosso grupo de 3 participantes especialistas dividindo responsabilidades e gerenciando do planejamento ao deploy: 

### 🚀 Configuração Inicial - (Líder da Equipe)
Preparação básica do repósitório original:
*   Instalação da plataforma Node.js: `npm init -y`;
*   Instalação dos pacotes: `npm install prisma @prisma/client express`;
*   Iniciação do modelo: `npx prisma init`;
*   Conexão: Criou o arquivo virtual `.env` que ligou o Banco de Dados;
*   Subiu e sincronizou as pastas bases para o nosso ambiente do **GitHub**.

### ☕ Integrante 1: O Dono da Tabela de **"Cardápio" (Produtos)**
*   **Banco de Dados (`schema.prisma`)**: Confeccionou toda a estruturação da tabela (Modelo) `Product` estabelecendo os campos `Nome`, `Categoria`, `Preço`, `Tamanho (ml/g)` e nossa bandeira de `Disponibilidade (Booleano - verdadeiro ou falso)`.
*   **O Back-end (Node.js)**: Implementou os códigos das operações principais do Prisma (nosso **CRUD**). A regra de negócio se estende em poder `POST` (Cadastrar), `GET` (Listar), `PUT` (Editar Preços) e o clássico `DELETE` para apagar doces/café.
*   **No Relatório Acadêmico**: É o dono que descreverá as tipagens deste campo nos documentos finais.

### 💼 Integrante 2: O Dono da Tabela **"Staff" (Funcionários)** 
*   **Banco de Dados (`schema.prisma`)**: Produziu a estrtura da tabela `Employee` determinando chaves primárias e lógicas de `Nome`, `Cargo`, `Turno`, `CPF` e `Data de Admissão` da equipe de colaboradores da cafeteria;
*   **O Back-end (Node.js)**: Assumiu e elaborou todo o ciclo "CRUD" destas funções e rotas;
*   **DevOps (No Relatório Acadêmico)**: Como especialista de hospedagem foi o integrante responsável em enviar a URL Pública em nuvem via platafomas (Railway / Render). 

### 🧾 Integrante 3: O Dono da Tabela de **"Vendas" (Pedidos)**
*   **Banco de Dados (`schema.prisma`)**: Construiu o modelo final focado em dinheiro/fechamentos como formato principal do sistema: A tabela `Order` possuindo o `Número do Pedido, Cliente, Total, Status, Forma de Pagamento`;
*   **O Back-end (Node.js)**: Escreveu códigos que geraram, editaram e listaram Vendas inteiras com a junção das informações da loja usando APIs;
*   **Documentador (No Relatório Acadêmico)**: Assumiu este mesmo `README.md` traduzindo a parte técnica da montagem das informações a fim de apresentar aos professores em nosso relatório as etapas, e as introduções sobre Como Excutar o seu ambiente Local para todos do time.

---

## 💻 Simples e Fácil: Como Instalar, Rodar e Executar Sua Plataforma

Sem dores de cabeça! Este pequeno e didático quadro de leitura ajudará absolutamente **qualquer usuário ou leigo técnico** a inicializar este projeto no seu próprio computador local de maneira muito simplificada: 

### Pré-Requisitos: 
*   Para executar aplicações Javascript para Web certifique-se primeiramente de possuir baixado, instalado em sua máquina e funcionando normalmente o **[Node.js](https://nodejs.org)** oficial!
*   Nós usamos editores de código (Sugerimos que baixe o popular **[Visual Studio Code](https://code.visualstudio.com/)**).

---

### Passo 1: Acesse e Instale a Biblioteca do Repositório!
Com o seu próprio "VSCode" acesse e abra a pasta principal chamada `APIRest_Cafeteria` contendo seus códigos, e acople nosso terminal interno na ferramenta em "View > Terminal" (`Ctrl + '`).  
Digite assim e clique `<Enter>` para ele baixar os itens pesados dependentes para pasta 'node_modules':
```bash
npm install
```

### Passo 2: Configure as "Chaves Secretas" do Banco!
Na página raiz, renomeie, se não houver um, um arquivo simples para apenas `.env`. Em caso de insegurança, veja que disponibilizamos o `.env.example`.
Neste seu `.env`, copie o esquema do link contendo as credenciais de usuários e senhas para encontrar com a porta relacional para ler seu **PostgreSQL**:
```env
DATABASE_URL="postgresql://NOME_USUARIO:SENHA_AQUI@localhost:5432/NOME_DO_BANCO?schema=public"
```
*(Caso você tenha utilizado a internet, use a que o Railway forneceu, por exemplo!)*

### Passo 3: Injete os Dados (Sincronização Prima)!
Nesse momento você está ligado pelo banco. Iremos pedir agora que ele automaticamente crie "nossas 3 Tabelas citadas antes" no projeto!
Escreva este comando rápido à vontade do nosso sistema em nosso VSCode, espere por mensagem sinal verde: 
```bash
npx prisma db push
```
*(Quer acompanhar seus campos sendo visualizados via página interativa maravilhosa? Escreva `npx prisma studio` e uma nova aba irá ligar na tela do seu navegador livre!)*


### Passo 4: Finalmente: Start na Sua Cafeteria!
Se foi de forma correta, acabe as requisições colocando no terminal: 
```bash
npm run dev
```
🎉 Uhull!! Caso em alguma das portas da rede local venha o aviso do Node *Servidor Online*, o serviço terá ligado! Basta aproveitar!