<h1 align="center">API Valoriza</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

  <img src="https://img.shields.io/static/v1?label=NLW&message=Together&color=8257E5&labelColor=000000" alt="NLW Together" />
</p>

<p align="center">
  <img alt="Preview" src="./.github/preview.png">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## 💻 Projeto

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`

## RECURSOS

 ## 1 - Cadastro de usúario

### Funcionalidades

* Cadastro de usuários adminsitradores

* Cadastro de usuários NÃO adminsitradores

 ### Regras

 * Não é permitido cadastrar mais de um usuário com o mesmo E-Mail

 * Não é permitido cadastrar usário sem E-Mail


## 2 - Cadastro de TAG

### Funcionalidades

* Cadastro de TAGS

 ### Regras

 * Não é permitido cadastrar mais de uma TAG com o memso nome

 * Não é permitido cadastrar TAG sem nome

 * Não é permitido o cadastro por usúarios que não sejam administradores

 ## 3 - Cadastro elogios

### Funcionalidades

* Cadastro de elogios

 ### Regras

 * Não é permitido cadastrar um elogio para si mesmo

 * Não é permitido cadastrar elogios para usúarios inválidos

* o usário precisa obrigatóriamente estar autenticado


Feito com 💜 &nbsp;[Diogo Santos](https://www.linkedin.com/in/diogo-santos01/) 👋🏻

 