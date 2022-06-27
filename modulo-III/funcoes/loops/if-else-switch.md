# Loops

## Objetivos

 1. Ensinar como utilizar uma das mais famosas declarações do JavaScript

## If/Else

Podemos colocar estruturas condicionais dentro de funções.
Dentro das funções, sua estrutura se mantém da mesma forma:

```
  function numeroPositivo(num){
    let resultado

    if (num < 0){
      resultado = false
    } else {
      resultado = true
    }

    return resultado
  }

  console.log(numeroPositivo(2)) // true
```

Perceba que a estrutura continua a mesma. Existe a condição postada entre parênteses e um bloco de instruções caso a condição seja atendida, e outro bloco de instruções caso não seja atendida.

Existe algumas boas práticas a serem seguidas quando utilizamos a estrutura condicional if/else.
Armazenar a sua condição em uma variável é uma delas:

```
  function positiveNumber(num){
    let result

    const isNegative = num < 0

    if (isNegative){
      result = false
    } else {
      result = true
    }

    return result
  }

  console.log(positiveNumber(2)) // true
```

Perceba que a condição foi colocada na variável "isNegative", para que o código se torne mais legível.

**OBS:** Variáveis que iniciam com a palavra "is" normalmente se espra que armazenem valores booleanos.

É possível ainda reduzir essa estrutura condicional, pois nem sempre o else é necessário:

```
  function positiveNumber(num){
    const isNegative = num < 0

    if (isNegative){
      return false
    }
    
    return true
  }
  console.log(positiveNumber(2)) // true
```

Perceba que mesmo sem o else, a função funciona da mesma maneira, já que na função basta utilizar o return para sair de seu escopo de código.

### Aninhamento de if

Nas funções também é possível fazer o aninhamento de if's. E como a estrutura de código fica maior, a ideia de utilizar as condicionais dentro de uma variável tem mais sentido ainda:

```
  function positiveNumber(num){
    const isNegative = num < 0
    const greaterThanTen = num > 10

    if (isNegative){
      return "Esse número é negativo"
    } else if (!isNegative && greaterThanTen) {
      return "Esse número é positivo e maior que 10"
    }
    
    return "Esse número é positivo"
  }
  console.log(positiveNumber(2)) // Esse número é positivo
  console.log(positiveNumbe(20)) // Esse número é positivo e maior que 10
  console.log(positiveNumbe(-5)) // Esse número é negativo
```

## Switch

Já vimos também a estrutura de Switch/Case anteriormente.

Nas funções sua estrutura é bem parecida, a única diferença possível, mas nem sempre utilizada, é substituir o break por um return.
Quando queremos que o resultado do switch/case seja o retorno da função, podemos substituir o "break" pelo "return":

```
  function getAnimal(id){
    switch(id){
      case 1:
        return "cão"
      case 2:
        return "gato"
      case 3:
        return "pássaro"
      default:
        return "id inválido"
    }
  }

  console.log(getAnimal(1)) //cão
  console.log(getAnimal(3)) //pássaro
  console.log(getAnimal(7)) //id inválido
```

É importante sempre ter um valor "default", ou seja, quando a comparação não satisfazer nenhum dos cases colocados.
E **lembre-se**, no caso de switch, a comparação é sempre de tipo e valor (===).