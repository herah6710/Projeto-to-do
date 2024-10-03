To-Do List Project
Descrição

Este é um projeto de lista de tarefas (To-Do List) desenvolvido com Node.js, utilizando a arquitetura MVC (Model-View-Controller) e o banco de dados não relacional MongoDB. 

O objetivo do projeto é gerenciar e organizar tarefas, permitindo a criação, atualização, visualização e exclusão de itens de uma lista de forma eficiente.

Tecnologias Utilizadas
Node.js: Plataforma para execução do código JavaScript no lado do servidor.
Express.js: Framework para criação da API e roteamento de requisições.
MongoDB: Banco de dados NoSQL para armazenamento das tarefas.
Mongoose: ODM (Object Data Modeling) para conectar o MongoDB ao Node.js.
MVC: Arquitetura utilizada para separar responsabilidades entre Modelo, Visão e Controlador.
Funcionalidades
Adicionar tarefas: O usuário pode criar novas tarefas.
Atualizar tarefas: O usuário pode editar as tarefas existentes.
Excluir tarefas: O usuário pode remover tarefas da lista.
Visualizar tarefas: O usuário pode ver todas as tarefas pendentes e completadas.
Pré-requisitos
Certifique-se de ter os seguintes itens instalados:

Node.js (versão 14 ou superior);
MongoDB rodando localmente ou através do MongoDB Atlas;
bash
npm start


Uso
Para editar ou excluir uma tarefa, utilize os botões de ação na interface.
Estrutura do Projeto
bash
├── controller/    # Controladores que lidam com a lógica de negócios
├── models/         # Modelos MongoDB definidos com Mongoose
├── routes/         # Definições das rotas da aplicação
├── views/          # Templates e arquivos de interface (ejs)
├── public/         # CSS
└── index.js          # Arquivo principal da aplicação
