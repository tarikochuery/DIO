# Arrow Functions

## Sinatxe

Já vimos a estrutura básica da arrow function, que é caracterizada pela flecha:

```
  const helloWorld = () => {
    return "Hello World"
  }
```

Porém, uma característica interessante é que se sua arrow function tem apenas um linha, pode ser ainda mais encurtada como no exemplo a seguir:

```
 const helloWorld = () => "Hello World!"
```

Como a função é bem simples, ela presume que aquilo que vier após a flecha é o que deseja-se retornar.

No caso de parâmetros, temos a seguinte sintaxe:

```
  const soma = (a, b) => a + b

  console.log(soma(4, 6)) //10
```

Porém, é possível encurtá-la caso apenas um único parâmetro seja utilizado:

```
  const duplicate = a => 2 * a

  console.log(duplicate(4)) //8
```

No exemplo acima, podemos ver que o parênteses da definição pode ser descartado por conta de haver apenas um parâmetro a ser passado para a função.

**IMPORTANTE:** A arrow function **NÃO** faz hoisting.

## Outras Restrições

 1. "this" sempre será um objeto global. E métodos envolvendo o "this" (call, apply, bind) não funcionarão para arrow functions.
 2. Não existe o objeto "arguments" para a arrow function.
 3. O construtor (new String()) também não pode ser utilizado. Portanto sempre utilize uma função comum para métodos de objetos.