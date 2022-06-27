# Outros Tipos de Função

## Função Autoinvocável

A estrutura dessa função faz com que no momento que ela é definida, ela também é invocada:

```
  (
    function () {
      let name = "Digital Innovatio One"
      return name
    }
  )()
```

Perceba que a declaração toda da função está entre parênteses, e logo após, abre-se outro parênteses que caracteriza a invocação dessa função.

**OBS:** Não é necessário que essa função tenha um nome, já que ela vai ser invocada logo após sua declaração.

É possível ainda passar parâmetros para a função auntoinvocável e até armazenar seu resultado em uma variável:

```
  (
    function(a, b) {
      return a + b
    }
  )(1,2) //3
```

```
  let soma3 = (
    function(a, b) {
      return a + b
    }
  )(1,2)

  console.log(soma3) //3
```

## Callbacks

Callback é um conceito de função, e não uma função com uma sintaxe especial.

O Callback é uma função que é passada como argumento para outra função:

```
  const calc = function (operacao, num1, num2){
    return operacao(num1, num2)
  }

  const soma = function (num1, num2){
    return num1 + num2
  }

  const sub = function (num1, num2){
    return num1 - num2
  }

  const resultSoma = calc(soma, 1, 2)
  const resultSub = calc(sub, 1, 2)

  console.log(resultSoma) // 3
  console.log(resultSub) // -1
```

É importante notar no exemplo acima que quando ao invocar a função que tem um callback como parâmetro, você não insere os argumentos no callback, apenas o nome da função.