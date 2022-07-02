# Consumindo APIs

## Objetivos

 1. Explicar o que são APIs
 2. Ensinar como lidar com requisições APIs
 3. Apresentar o método ```.fecth()```

## O que são APIs

API = Application Programming Interface

Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.

Você consegue acessá-las por meio de URLs.

Por exemplo, um banco de dados tem uma API para acessá-lo, e essa API pode ser utilizada por páginas web, aplicativos e até outras APIs.

### JSON

JSON = JavaScript Object Notation

O JSON é um formato de arquivo(```.json```), o qual a maioria das APIs retornam seus dados. Portanto precisamos tratar os dados quando recebemos:

```
/bank.json

{
  "description": "schema POST bank",
  "type": "object",
  "properties": {
    "id":{
      "type": "number",
      "minimum": 0
    },
    "code": {
      "type": "string"
    },
    "name": {
      "type": "string"
    }
  }
}
```

## Método ```.fecth()```

O método ```.fetch()``` é muito utilizado para realizar o consumo de APIs.

```
fetch(url, options)
  .then(response => response.json())
  .then(json => console.log(json))

//retorna uma Promise
```

O método precisa receber dois parâmetros:
 - **URL:** Corresponde ao endereço da API
 - **Options:** Corresponde às opções da sua requisição, ou seja, qual o tipo de requisição, o que fazer com ela, etc... As opções devem sempre ser enviadas como um objeto.

O retorno desse método é uma Promise, então é possível utilizar o encadeamento como vimos na aula anterior. 
É bom aproveitar o encadeamento para fazer o tratamento dos dados recebidos pelo método ```.fecth()```. Perceba que no exemplo acima, a resposta foi transformada em um arquivo JSON pelo método ```.json()```.

### Tipos de Requisição

Existem diversos tipos de requisições que podem ser feitas para uma API, por exemplo: POST, GET, PUT, DELETE.

```
fetch('https://endereco-api.com/', {
  method: 'GET',
  cache: 'no-cache',

})
  .then(response => response.json())
  .then(json => console.log(json))

// retorna uma Promise
```

No exemplo acima, foi utilizada uma requisição com o método GET. No caso, apenas foi escolhido não armazenar cache no navegador do usuário.

```
fetch('https://endereco-api.com/', {
  method: 'POST',
  cache: 'no-cache',
  body: 'JSON.stringfy(data)'
})
  .then(response => response.json())
  .then(json => console.log(json))

// retorna uma Promise
```

Já neste exemplo, o método da requisição foi o POST, então são enviados dados para a API. Então, nas opções tem que ser mandados esses dados. Porém esses dados devem ser transformados em string, como feito na chave ```body``` das opções.