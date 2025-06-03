# 🚀 Projeto QA Sports Tracker

Este projeto contém testes automatizados utilizando **Cypress** para consumir APIs públicas de esportes.

## Funcionalidades

Os testes automatizados cobrem:

🏎️ F1:
- ✅ Listagem de todos os **Grand Prix** da temporada;
- ✅ Listagem de todos os **vencedores** de cada corrida;
- ✅ Classificação geral dos **pilotos (driver standings)**;
- ✅ Listagem de todos os **pole positions** da temporada.

⚽ Serie B:
- ✅ Listagem de todas as **rodadas** do campeonato;
- ✅ Listagem de todos os **times** do campeonato;
- ✅ Classificação geral dos **times** no campeonato.

## Requisitos
Antes de executar os testes, certifique-se de ter os seguintes requisitos instalados:
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)

## Instalação

Clone o repositório e instale as dependências:

```sh
# Clone o repositório
git clone https://github.com/gabrielsilva9810/qa-sports-tracker.git

# Acesse o diretório do projeto
cd qa-sports-tracker

# Instale as dependências
npm install

# Instale o Cypress
npm install cypress --save-dev
```

## Execução dos Testes
Para rodar os testes, utilize o comando:
```sh
npm run test     # Executa os testes em modo headless (sem interface gráfica)  
npm run cy:open  # Executa os testes no modo interativo (GUI Mode)
```

## Tecnologias Utilizadas
- Cypress → Ferramenta de automação de testes para aplicações web
- Node.js → Ambiente de execução para JavaScript
- npm → Gerenciador de pacotes do Node.js
- GitHub Actions → Integração contínua (CI/CD) 

## APIs Utilizadas
- [F1](https://ergast.com/mrd/)
- NBA - 
- [Campeonato Brasileiro B](https://api-futebol.com.br/documentacao/campeonato) 

---
🤝🏻 Feito por [Gabriel Silva](https://www.linkedin.com/in/gabrielsilva9810/)