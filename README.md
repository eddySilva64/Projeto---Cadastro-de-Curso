# Projeto-Cadastro-de-Curso

API que faz o cadastro, autalização, exclusão e mostra todos os cursos cadastrados.

Modulos usados:

Express
Mongoose
Body-Parser
Nodemon

Banco de Dados:

MongoDB Atlas - Uma versão em cloud.

Como usar a API:

Quando clonar o repositorio rodar no terminal do repositorio da API o comando npm install, esse comando vai baixar todos os modulos do projeto, feito isso rodar o npm run dev para inicializar a aplicação.

Rotas

Rota GET http://localhost:3001/course-list: vai mostrar todos uma lista de todos os registros do Banco de Dados.
Rota GET http://localhost:3001/course/:id: vai mostrar um registro do Banco de dados pelo seu id.
Rota POST http://localhost:3001/create: vai criar um novo registro no Banco de Dados.
Rota PUT http://localhost:3001/course-update/:id: vai atualizar um registra do Banco de Dados.
Rota DELETE http://localhost:3001/course-destroy/:id: vai excluir um registro do Banco de Dados.
