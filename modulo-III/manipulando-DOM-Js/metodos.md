# Métodos

## Objetivos
 1. Apresentar a estrutura HTML
 2. Apresentar métodos para interagir com os elementos de uma página

## Estrutura HTML

```
  <html>
    <head>
      <title>Minha Página</title>
    </head>
    <body>
      <h1 id='titulo'>Minha Página</h1>

      <section class='textos'>
        <h2>Sobre mim</h2>
        <p>Texto sobre a pessoa aqui</p>
      </section>

      <section class='textos'>
        <h2>Meus Projetos</h2>
        <ul>
          <li>Projeto 1</li>
          <li>Projeto 2</li>
          <li>Projeto 3</li>
        </ul>
      </section>
    </body>
  </html>
```

Uma estrutura básica de uma página HTML está acima, como já vimos nos cursos anteriores de HTML.

Vale destacar que o principal a ser utilizado pelo Js serão as tags, os ids e as classes.

### Selecionando Elementos de uma Página

Para selecionar um elementos na estrutura HTML para fazer alguma alteração, existem três maneiras diferentes, e vamos utilizar a estrutura HTML acima como base:

 1. Buscando um elemento pelo id:
    ```
      document.getElementById('titulo')
      //<h1 id='titulo'>Minha Página</h1>
    ```
    Perceba que utilizamos o objeto "document", que é o nosso DOM, e utilizamos um método dentro dele, o ```.getElementById()```. Esse método precisa que como parâmetro seja passado um id que você escolheu pra um determinado elemento no seu HTML. Como o id é único, então o retorno será um único elemento no seu HTML.

  2. Buscando um elemento pela tag:
     ```
      document.getElementByTagName('li')
      /*
        [
          <li>Projeto 1</li>,
          <li>Projeto 2</li>,
          <li>Projeto 3</li>
        ]
      */
     ```
     Nesse caso, utilizamos o método ```.getElementByTagName()```. Deve ser passado o nome da tag no lugar do parâmetro e como há mais de um elemento com uma mesma tag, então o retorno sempre se dá em forma de array. No exemplo, a estrutura HTML tem 3 tags "li", então é retornado um array com 3 elementos.

  3. Buscando um elemento pela sua classe:
     ```
      document.getElementByClass('textos')
      /*
        [
          <section class='textos'>
            <h2>Sobre mim</h2>
            <p>Texto sobre a pessoa aqui</p>
          </section>,

          <section class='textos'>
            <h2>Meus Projetos</h2>
            <ul>
              <li>Projeto 1</li>
              <li>Projeto 2</li>
              <li>Projeto 3</li>
            </ul>
          </section>
        ]
      */
     ```
     No exemplo acima, é utilizado o método ```.getElementByClass()```, onde o parâmetro a ser passado é o nome de uma classe que foi utilizado no documento HTML.
     Como classes podem ser utilizadas mais de uma vez, o retorno do método é sempre um array.
     Perceba que o elemento que tinha a classe ```textos``` tinha uma série de elementos filhos aninhados dentor dele, então esses elementos filhos fazem parte do retorno.

  4. (BÔNUS) É possível também fazer buscas personalizadas. 
  Então posso buscar elementos que tenham duas classes, ou um elemento com uma tag e uma classe específica:
      ```
        index.html

        <html>
          <head>
            <title>Exemplo querySelectorAll</title>
          </head>

          <body>
            <div class='primeira-classe segunda-classe'>
              <ul>
                <li class='opcao'>opcao 1</li>
                <li class='opcao'>opcao 2</li>
                <li class='opcao'>opcao 3</li>
              </ul>
            </div>
          </body>
        </html>


        script.js

        document.querySelectorAll('.primeira-classe .segunda-classe')
        /*
          [
            <div class='primeira-classe segunda-classe'>
              <ul>
                <li class='opcao'>opcao 1</li>
                <li class='opcao'>opcao 2</li>
                <li class='opcao'>opcao 3</li>
              </ul>
            </div>
          ]
        */

          document.querySelectorAll('li .opcao')
          /*
            [
              <li class='opcao'>opcao 1</li>,
              <li class='opcao'>opcao 2</li>,
              <li class='opcao'>opcao 3</li>
            ]
          */
        ```

        Nesse exemplo, o método utilizado foi ```.querySelectorAll```. A palavra "query" significa "busca", então a ideia do método é buscar todos os elementos que têm as características passadas nos parâmetros do método. É importante notar que quando a busca é feita para encontrar uma classe, utiliza-se o ponto (.) na frente do nome, e quando quer encontrar um id, utiliza-se a hashtag (#) na frente do do nome buscado.

### Adicionar e Remover Elementos

É possível também adicionar e remover elementos à sua estrutura HTML utilizando o Js.

|Método|Descrição|
|------|---------|
|```document.createElement(element)```| Cria um novo elemento HTML|
|```document.removeChild(element)```| Remove um elemento|
|```document.appendChild(element)```| Adiciona um elemento|
|```document.replaceChild(new,old)```| Substitui um elemento|