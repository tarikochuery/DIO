# Vantagens do TypeScript

O TypeScript é uma linguagem que tem o intuito de trazer tipagem para o JavaScript.

Veja no exemplo abaixo:

```
const soma = (a, b) => a + b

soma(1,2) // 3
soma('a', 'b') //ab
```

No código acima, declaramos a função soma, que soma dois valores passados pelo parâmetro.
Entretanto, se eu passar valores não numéricos, a função soma também vai funcionar, pois não existe nenhuma validação para os parâmetros.
Essa validação teria que ser inserida através de um estrutura condicional, como abaixo:

```
const soma = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number'){
    return a + b
  }
}

soma(1, 2) //3
soma('a', 'b') //
```

Nesse caso há uma validação do tipo de dado enviado pelo parâmetro, entretanto, a quantidade de código adicionado é extensa e demanda tempo. Com o TypeScript isso já é característica da linguagem, então facilita o trabalho.