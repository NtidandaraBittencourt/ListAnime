# Lista de Animes

## Descrição

Esta aplicação lista animes usando a API AniList. Os usuários podem filtrar os animes por formato e pesquisar por texto. A média de notas de cada anime é representada visualmente com uma codificação de cores:

- Abaixo de 50: Vermelho
- Entre 50 e 80: Amarelo
- Acima de 80: Verde

O design é baseado em um template do [Figma](https://www.figma.com/file/PPvIPPITdlgZo9CeGDVezk/DesafioWinnin?type=design&node-id=3396%3A64&mode=design) , garantindo que todas as informações e o layout sigam de perto o design especificado.

## 📋 Funcionalidades

- Listar animes com filtros por formato e pesquisa por texto.
- Exibição da média de notas com código de cores.
- Design responsivo para garantir usabilidade em diversos dispositivos.

Atualmente, dois plugins oficiais estão disponíveis para integração com React:

## 🛠️ Tecnologias Utilizadas

- ReactJS
- Material UI, Tailwind
- SCSS
- Axios para requisições à API
- Testes: Unitários com Jest e  de E2E com Cypress

## 📂 Estrutura do Projeto

A estrutura básica do projeto é a seguinte:
├── public │ └── index.html ├── src │ ├── assets │ ├── components │ ├── App.jsx │ ├── main.jsx │ └── styles ├── .eslintrc.js ├── .gitignore ├── index.html ├── package.json ├── README.md └── vite.config.js

## 🚀 Instalação e Rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/NtidandaraBittencourt/ListAnime

cd ListAnime

npm install
```

2. Execute a aplicação
Para iniciar o servidor de desenvolvimento, execute:

```bash
npm start
```

Para instalar as dependências do projeto, execute:

```bash
npm install
```

## 📚 Testes

### Rodar os testes

```bash
cd frontend
npm run test
```

## Diferenciais

1. Implementação de testes unitários 
2. Testes E2e
3. Documentação
4. Dark mode, responsividade