# Array e Objetos

## Arrays

O array é uma estrutura de dados que funciona como uma lista. 
Dentro desta estrutura podem ter diversos tipos de outras estruturas de dados.

Já vimos anteriormente como funcionam os arrays, e aqui temos algumas outras formas de manipular essa estrutura de dados.

### Spread

O Spread é um comando que nos permite trabalhar separadamente com cada um dos elementos do array:

```
  function sum(x, y, z){
    return x + y + z
  }

  const numbers = [1, 2, 3]

  let result = sum(...numbers)

  console.log(result) // 6
```

Perceba que a função "sum" foi invocada com o array "numbers" como parâmetro. Entretanto, antes do nome da variável há as reticências. Essas reticências servem como o comando do spread, logo, quando isso ocorre, os elementos do array "numbers" se tornam estruturas de dados independentes.

Portanto, para a função "sum", os argumentos passados foram os elementos dentro do array "numbers".

### Rest

Este método funciona como o Spread, porém funciona de forma contrária. Ou seja, ele une estruturas de dados independentes em uma lista:

```
  function confereTamanho(...args){
    return args.length
  }

  console.log(confereTamanho(3, 4, 5)) //3
  console.log(confereTamanho(1, 2)) //2
  console.log(confereTamanho()) //0
```

No exemplo acima, o rest está unindo os parâmetros que são passados de forma independente em um único array chamado de "args".

## Objetos

Já vimos anteriormente a desestruturação de um objeto. Agora vamos entender como utilizar essa desestruturação no parâmetro de uma função:

```
  const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  }

  function getId({id}){
    return id
  }

  function getFullName({fullName: {firstName: first, lastName: last}}){
    return `$(first) $(last)`
  }

  console.log(getId(user)) //42
  console.log(getFullName(user)) //John Doe
```

Na função "getId" é passado como parâmetro a desestruturação de um objeto, onde é buscado dentro do objeto que será passado como parâmetro a chave id, e este valor é inserido em uma variável que tem o mesmo nome da chave. Por isso, quando após o comando return tem a variável id, é o valor atribuído à chave id no objeto.

Já na segunda função, é feita uma desestruturação dentro de uma desestruturação.
Perceba que na primeira desestruturação a função busca uma chave "fullName" que tenha como valor um outro objeto.
Nesse objeto, é feito uma desestruturação onde são buscadas a chave "firstName" e seu valor é atribuído na variável "first" e a chave "lastName", e seu valor é atribuído na variável "last".