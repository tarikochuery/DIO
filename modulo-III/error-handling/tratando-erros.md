# Tratando Erros

## Objetivos
 1. Explicar a diferença entre "throw" e "return"
 2. Apresentar a implementação da declaração try/catch.

## Throw

Quando definimos uma função e queremos fazer uma validação dos parâmetros, por exemplo, desejamos informar um erro quando algo não é respeitado. Por exemplo:

```
  function verifyPalindrome(string) {
    if (!string) return "String inválida"

    return string === string.split("").reverse().join("")
  }

  verifyPalindrome('cat')
```

Nesse caso, no início da função há uma verificação para saber se o parâmetro passado não é uma string vazia, ou algum tipo de dado vazio, null ou undefined. Se isso ocorre, é retornada uma string.

Entretanto, com o comando throw é possível lançar um erro de verdade:

```
  function verifyPalindrome(string) {
    if (!string) throw "String inválida"

    return string === string.split("").reverse().join("")
  }

  verifyPalindrome('') //Error "String Inválida"
```

Nesse caso acima, um erro será mostrado no console.

## Try... Catch...

Estrutura utilizada para a manipulação do erro.

```
  function verifyPalindrome(string) {
    if (!string) throw "String inválida"

    return string === string.split("").reverse().join("")
  }

  function tryCatchExample(string){
    try {
      verifyPalindrome(string)
    } catch (err) {
      console.log(err)
    }
  }

  tryCatchExample('') // String Inválida
```

Nesse exemplo podemos ver como funciona a estrutura do Try...Catch... para o tramento do erro.

No escopo do try é colocado a tentativa do que você gostaria que seu código realizasse.

No escopo do catch é colocado o que você deseja fazer com o erro que foi capturado pela estrutura.

## Finally

A palavra reservada finally abre um novo escopo na estrutura try...catch... que será esecutado independente se houve um erro ou não:

```
  function verifyPalindrome(string) {
    if (!string) throw "String inválida"

    return string === string.split("").reverse().join("")
  }

  function tryCatchExample(string){
    try {
      verifyPalindrome(string)
    } catch (err) {
      console.log(err)
    } finnaly {
      console.log(`A string enviada foi: ${string}`)
    }
  }

  tryCatchExample('') // A string enviada foi:
                      // String Inválida
```