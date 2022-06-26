# Veotre e Objetos

## Objetivos

1. O que são Vetores ou Arrays
2. Como manipular Arrays
3. O que são Objetos
4. Desestruturar Objetos

## O que são vetores

Arrays são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos.

Imagine que um array é um espaço na memória do computador com vários espaços de dentro dele que tem diversos valores.

**Exemplo:** var array = [1, "texto", true]

O array deve ser declarado entre colchetes "[]", e podem guardar qualquer valor dentro de seus índices, inclusive outros arrays.

**Exemplo:** let array = ['string', 1, true, false, [10, 'texto', false]]

**OBS:** O índice é a posição do elemento dentro do array. O índice é determinado por um número inteiro, onde o 0 indica a primeira posição.

Para acessar um valor específico de um array, utilizamos a seguinte estrutura:

```
var array = ['texto1', 10, true, 'texto']

console.log(array[0]) //'texto1'

console.log(array[2]) //true
```

É possível também determinar a quantidade de elementos de um array pelo método .length:

```
var array = ['texto1', 10, true, 'texto']

console.log(array.length) //4
```

## Manipulando arrays

Para manipular o Array, há uma série de comandos nativos do Js:
  - forEach() - Passa por todos os elementos de um array
  - push() - adiciona um item ao final do array
  - pop() - remove o último item do array
  - shift() - remove o primeiro item do array
  - unshift() - adiciona um item ao início do array
  - indexOf() - retorna o índice de um valor
  - splice() - remove ou substitui um intervalo de items, localizado pelo índice
  - slice() - retorna uma parte de um array existente

```
  let array = [1, 2, 3, 4, 5]

  array.forEach(function (item, index){
    console.log(item, index)
  })
  /* 1 0
     2 1
     3 2
     4 3
     5 4 */
  
  array.push(6)
  console.log(array) //[1,2,3,4,5,6]

  array.pop()
  console.log(array) //[1,2,3,4,5]

  array.shift()
  console.log(array) //[2,3,4,5]

  array.unshift(1)
  console.log(array) //[1,2,3,4,5]

  console.log(array.indexOf(3)) //2

  array.splice(0,2)
  console.log(array) //[3,4,5]

  array.slice(0,2)
  console.log(array) //[3,4]
```

## Objetos

É uma estrutura de dados que possui propriedades (chave) e a estas propriedades são atribuídos valores.
O objeto deve ser declarado entre chaves.

A ideia dos objetos é que eles se assemelhem a objetos no mundo real. Imagine um xícara. Essa xícara pode ter uma cor, um tamanho, pode cumprir uma função.

Vamos construir esse obejto xícara no Js com a seguinte estrutura:

```
  var xicara = {
    cor: 'azul',
    tamanho: 'p'
    funcao: tomarCafe()
  }
```

## Desestruturar objetos

As propriedades de objetos podem ser facilmente acessadas. Para isso basta usar a seguinte estrutura:

Suponha que você queira acessar a cor da xícara:

```
  var cor = xicara.cor
  console.log(cor) //azul
```

Para acessar uma propriedade basta utilizar o ponto (.) seguido do nome da propriedade unidos ao nome do objeto.

Outra maneira de fazer a desestruturação é utilizando a seguinte sintaxe:

```
  var {cor, tamanho, funcao} = xicara

  console.log(cor) //'azul'
  console.log(tamanho) //'p'
  console.log(funcao) //tomarCafe()
```

Pode parecer estranho de início, porém, você está declarando variáveis cujo nome é igual ao nome da propriedade, e o valor atribuído à variável é o valor referete à respectiva propriedade.