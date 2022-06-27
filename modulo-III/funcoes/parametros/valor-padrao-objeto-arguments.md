# Parâmetros

## Objetivos

 1. Ensinar como manipular parâmetros de uma função
 2. Técnicas para lidar com número indefinido de parâmetros

## Valores Padrão

Quando definimos nossa função, muitas vezes queremos estipular um parâmetro como opcional, e então, quando não passado esse valor, utilizamos um valor padrão que a funcção utilizará.

Fazemos isso da seguinte maneira:

```
  function exponencial(array, num = 1){
    const result = []

    for (let i = 0; i < array.length; i++){
      result.push(array[i] ** num)
    }

    return result
  }

  console.log(exponencial([1, 2, 3, 4])) // [1, 2, 3, 4]
  console.log(exponencial([1, 2, 3, 4], 4)) //[1, 16, 81, 256]
```

Perceba que na declarção da função, ao argumento num é "atribuído" o valor 1, porém nessa sintaxe você atribui esse valor ao argumento num quando nenhum valor for passado.

## Objeto "arguments"

O objeto "arguments" é um array com todos os argumentos passados como parâmetros para a função.

```
  function findMax(){
    let max = -Infinity

    for(let i = 0; i < arguments.length; i++){
      if (arguments[i] > max){
        max = arguments[i]
      }
    }

    return max
  }

  let maxNumber = findMax(1, 2, 3, 6, 90, 1)

  console.log(maxNumber) //90
```

Perceba que no exemplo acima, na definição da função, não é passado um argumento que será utilizado. Em vez disso, é utilizado o array arguments, onde seus elementos são todos os argumentos passados para a função.

Dessa forma, é possível trabalhar com os parâmetros sem saber quantos serão enviados na função.