# Loops

## for

Já vimos a estrutura do for.

O for é muito utilizado para trabalhar com estruturas de dados com elementos iteráveis (array, strings).

```
  function timesTwo(array){
    let result = []

    for(let i = 0; i < array.length; i++){
      result.push(array[i]*2)
    }

    return result
  }

  const numbers = [2, 33, 456, 356, 40]

  console.log(timesTwo(numbers)) //[4, 66, 912, 712, 80]
```

Perceba que na estrutura do for, a condição é que o contador seja menor que o tamanho do array, para que o for possa possibilitar a iteração com todos os elementos do array no parâmetro.

### for... in...

Já vimos essa estrutura anteriormente e é mais comum utilizá-la com os objetos, de forma a acessar as propriedades.

```
function exemple(object){
  for(prop in object){
    console.log(prop)
  }
}

const myObject = {
  name: "João",
  age: 20,
  city: "Salvador"
}

console.log(exemple(myObject)) //name
                               //age
                               //city 
```

Perceba que com essa estrutura, as propriedades do objeto são acessadas. Para acessar o valor, devem ser utilizados o ponto(.) ou as chaves([ ]):

```
function exemple(object){
  for(prop in object){
    console.log(object.prop)
  }
}

const myObject = {
  name: "João",
  age: 20,
  city: "Salvador"
}

console.log(exemple(myObject)) //João
                               //20 
                               //Salvador 
```

### for... of...

Essa estrutura também já foi vista anteriormente.

Basicamente ela passar por elementos iteráveis de coleções ou strings:

```
  function logLetters(string){
    for(letter of string){
      console.log(letter)
    }
  }

  logLetters("amor") //a
                     //m
                     //o
                     //r
```

```
  function logNumbers(array){
    for(number of array){
      console.log(number)
    }
  }

  logNumbers([5, 10, 15, 20]) //5
                              //10
                              //15
                              //20
```

## While e Do... While...

### While

Já vimos a estrutura do While anteriormente, e aplicá-lo dentro da função funciona da mesma maneira.

Lembre-se sempre de alterar a variável que você utilizando para estabelecer a condição, ou seu looping nunca encerrará:

```
  function whileExemple() {
    let num = 0

    while(num <= 5){
      console.log(num)
      num++
    }
  }

  exemploWhile() //0
                 //1
                 //2
                 //3
                 //4
                 //5
```

Perceba que no bloco dentro da estrutura while a variável "num" é sempre incrementada.

### Do... While...

Já vimos a estrutura, e vamos lembrar que o do... while... sempre será executará o bloco de código dentro de sua estrutura, mesmo que a condição não seja atendida:

```
  function doWhileExemple(){
    let num = 6

    do{
      console.log(num)
      num++
    } while (num <= 5)
  }

  doWhileExemple() //6
```

Perceba que o bloco de código e a condição dentro da estrutura do...while... é a mesma do exemplo anterior, porém, o num foi inicializado com o valor 6.
No exemplo anterior, o código nem entraria no escopo do while, porém nessa estrutura o código entra pelo menos uma vez no escopo da estrutura.