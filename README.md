# Easy Class - Cliente Web


Cliente Web para a área administrativa do projeto Easy Class

## Como rodar a aplicação

**Pré-requisitos: Node, NPM e MongoDB.** 

1. Execute o projeto contendo o servidor Express (http://www.tools.ages.pucrs.br/easyclass/backend)
2. Instale as dependências do projeto

````
# npm install
````

3. Execute o script para inicializar o servidor webpack para desenvolvimento

````
# npm run start-dev
````

4. Para executar a compilação do projeto:

````
# npm run build
````

Para executar os testes:

````
# npm test
````

---

## Como rodar a aplicação com Docker

**Pré-requisitos: Docker, (no Windows, habilitar Hyper-V)** 

1. Cria imagem e gera container para desenvolvimento:

````
  # docker-compose up app
````

Cria imagem e gera container para testes:

````
  # docker-compose run test
````
