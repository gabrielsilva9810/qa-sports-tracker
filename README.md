# 🚀 Projeto QA Sports Tracker

Este projeto contém testes automatizados utilizando **Cypress** para consumir APIs públicas de esportes.

## Funcionalidades

Os testes automatizados cobrem:

🏎️ F1:
- ⚠️ Listagem de todos os **grand prix** da temporada;
- ⚠️ Listagem de todos os **vencedores** de cada corrida;
- ⚠️ Classificação geral dos **pilotos**;
- ⚠️ Listagem de todas as **pole positions** da temporada.

> API descontinuada.
> Os testes foram pulados para evitar falhas desnecessárias.

🏀 NBA: 
- ✅ Listagem de **5 jogadores** da NBA;
- ✅ Listagem de **todos os times** da NBA;
- ✅ Listagem de **10 jogos da temporada de 2022** da NBA.

⚽ Serie B:
- ✅ Listagem de todas as **rodadas** do campeonato;
- ✅ Listagem dos **artilheiros** do campeonato;
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

## Resultados dos Testes

### 🏀 NBA
![NBA - Jogadores](docs/screenshots/nba-stats.png)

### ⚽ Série B
![Série B - Classificação](docs/screenshots/serie-b-table.png)

## Tecnologias Utilizadas
- Cypress → Ferramenta de automação de testes para aplicações web
- Node.js → Ambiente de execução para JavaScript
- npm → Gerenciador de pacotes do Node.js
- GitHub Actions → Integração contínua (CI/CD) 

## APIs Utilizadas
- [F1](https://ergast.com/mrd/)
- [NBA](https://docs.balldontlie.io/#nba-api)
- [Campeonato Brasileiro B](https://api-futebol.com.br/documentacao/campeonato) 

---
🤝🏻 Feito por [Gabriel Silva](https://www.linkedin.com/in/gabrielsilva9810/)