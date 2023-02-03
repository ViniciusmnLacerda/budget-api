# Budget API
  
# Contexto
Este projeto trata-se de um middleware que consome os dados de uma API do mockend, os endpoints são: 
  - https://mockend.com/juunegreiros/BE-test-api/users - retorna uma lista de usuários. 
  - https://mockend.com/juunegreiros/BE-test-api/products - retorna uma lista de produtos.
  
## Técnologias usadas

Back-end:
> Desenvolvido usando: NodeJS, ExpressJS e TypeScript, 


## Instalando Dependências
```bash
cd budget-api/ && npm install
``` 
## Executando aplicação

  ```
  cd budget-api/ && npm run dev
  ```
## Executando Testes

* Para rodar todos os testes unitários:

```bash
  npm run test:unit
``` 

* Para rodar todos os testes de integração:

```bash
  npm run test:integration
``` 

## Rotas
* Lista de usuários cadastrados:

```
  /users
``` 
* Lista de produtos cadastrados:

```
  /products
``` 
* Orçamento de um usuário cadastrato:

```
  /budget/:id/:ids
``` 
    id: Id de um usuário cadastrado.
    ids: Array com ids dos produtos selecionados
