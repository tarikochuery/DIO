# Manipulando Estilos

## Objetivos
 1. Ensinar como manipular estilos de elementos HTML

## Classes

O elementos HTML tem uma série de propriedades que podem ser acessados enquanto tratados como objetos.
Uma dessas propriedades é a ```.classList```, que traz a lista de classes de um elemento, e essa propriedade tem alguns métodos que podem manipular a lista de classes:

```
  index.html

  <div id='meu-elemento' class='classe'>
    <!-- resto do código aqui -->
  </div>
```

Para a estrutura HTML acima temos uma série de métodos do ```.classList``` que podemos utilizar para alterar o estilo do elemento acima:

```
  const meuElemento = document.getElementById('meu-elemento')

  meuElemento.classList.add('novo-estilo')
  // Adiciona classe ao "meu elemento"

  meuElemento.classList.remove('classe')
  // Remove a classe 'classe' do meu elemento

  meuElemento.clasList.toggle('dark-mode')
  // Adiciona a classe 'dark-mode' caso não tenha e remove caso tenha
```

No exemplo acima, mostramos três métodos diferentes para adicionar e remover classes ao elemento div.
É muito comum e uma boa prática armazenar um elemento que será modificado em uma variável como foi feito no exemplo acima.

Portanto, o resultado do HTML após rodar o código Js do exemplo acima resulta no seguinte:

```
  index.html

  <div id='meu-elemento' class='novo-estilo dark-mode'>
    <!-- resto do código aqui -->
  </div>
```

## CSS

No exemplo anterior, já havia classes prontas no arquivo CSS, e apenas adicionamos a classe a um elemento.
É também possível acessar diretamente o CSS de um determinado elemento:

```
  const meusParagrafos = document.getElementByTagName('p')

  meusParagrafos.style.color = 'blue'
```

Nesse exemplo, acessamos diretamente o estilo dos parágrafos no HTML e alteramos as propriedade cor para azul.