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
 GET /users
``` 
* Lista de produtos cadastrados:

```
 GET /products
``` 
* Orçamento de um usuário cadastrato:

```
 POST /budget/:id
``` 
    
O parâmetro ```ìd``` deve ser de um usuário cadastrado. O corpo da requisição deve ter o seguinte formato: 

    [1, 2, 3]
  
Cada elemento do array representa o ID de um produto selecionado.

Caso o ID enviado no parâmetro da requisição seja inválido o erro retornado será:
  
    {
      "message": "User not found
    }
    
Caso algum ID do body da requisição não seja do tipo number o erro retornado será:

    {
      "message": "Fields must be numbers"
    }
    
Caso algum ID do body da requisição seja inexistente o erro retornado será: 

    {
      "message": "Invalid product id"
    }
