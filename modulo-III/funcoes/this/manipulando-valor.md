# Manipulando o Valor de This

## Método .call()

```
  const pessoa = {
    nome: "Miguel"
  }

  const animal = {
    nome: "Murphy"
  }

  function getSomething(){
    console.log(this.nome)
  }

  getSomething.call(pessoa) // Miguel
  getSomething.call(animal) // Murphy
```

Nesse caso, o call faz com que o this se refira ao parâmetro que foi passado para o método.

Perceba que na primeira vez o call é utilizado, o parâmetro é "pessoa", um objeto que tem à propriedade nome atribuído o valor "Miguel", e por isso esse valor é retornado no log.

O mesmo ocorre na segunda chamada do método call, porém com o objeto animal.

O método call também pode ser utilizado para funções que requerem parâmetros:

```
  const myObj = {
    num1: 2,
    num2: 4
  }

  function sum(a, b){
    console.log(this.num1 + this.num2 + a + b)
  }

  sum.call(myObj, 1, 5) //12
```

Perceba que quando o call é utilizado com uma função com parâmetro, o contexto deve ser passado primeiro, e então os parâmetros, sempre separando parâmetros por vírgulas.

## Método .apply()

A utilização entre o método .apply() e .call() é bem pequena.

Para funções que não precisam de parâmetro, a utilzação é a mesma:

```
  const pessoa = {
    nome: "Miguel"
  }

  const animal = {
    nome: "Murphy"
  }

  function getSomething(){
    console.log(this.nome)
  }

  getSomething.apply(pessoa) // Miguel
  getSomething.apply(animal) // Murphy
```

Quando a função pede parâmetros, estes devem ser enviados com um único argumento dentro de um array:

```
  const myObj = {
    num1: 2,
    num2: 4
  }

  function sum(a, b){
    console.log(this.num1 + this.num2 + a + b)
  }

  sum.apply(myObj, [1, 5]) //12
```

## Método .bind()

O .bind clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro:

```
  const retornaNomes = function() {
    return this.nome
  }

  let bruno = retornaNomes.bind({nome: 'Bruno'})

  console.log(bruno()) //Bruno
```

Perceba que a variável "bruno" se tornou uma função, pois o método .bind() clonou a estrutura da função "retornaNomes" e colocou no this o parâmetro que foi passado, que é o objeto {nome: "Bruno"}.

