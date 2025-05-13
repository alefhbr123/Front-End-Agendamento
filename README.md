<h1 align="center">
Agendamento - Front-End
</h1>

<h4 align="center"> 
    :construction:  Projeto em construção  :construction:
</h4>

Este é o repositório do frontend do sistema de agendamentos, desenvolvido em Next.js (React). Permite ao usuário criar, listar e visualizar detalhes de agendamentos via interface web.

## 🚀Tecnologias Utilizadas
- ``Next.js 15.x``
- ``React 18.x``
- ``JavaScript``
- ``React DatePicker``
- ``Fetch API``

## 📦​Instalação
## 1. Clonar o Repositório

Abra o terminal e execute os comandos abaixo:

```bash
git clone https://github.com/alefhbr123/agendamentos-front.git
cd agendamentos-front
```
## 2. Instale as dependências:
```bash
npm install
```
Executando em modo de desenvolvimento
```bash
npm run dev
```

Acesse http://localhost:3000 no seu navegador.


## 🔗Funcionalidades:
- ✅Listar agendamentos existentes

- ✅Criar novo agendamento com nome, data e hora

- ✅Excluir agendamento existente

- ✅Visualizar detalhes de um agendamento em página dedicada

- ✅Interface limpa e responsiva

## 🏗Estrutura do projeto
```text
 agendamentos-front/
├── pages/
│   ├── index.js       # Página principal (form + lista)
│   └── agendamento/
│       └── [id].js    # Detalhes de um agendamento
├── public/            # Arquivos estáticos
├── styles/            # Estilos globais (se aplicável)
├── package.json
└── README.md

```
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
