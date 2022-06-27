# This

## Objetivos

 1. Apresentar a palavra "this" e seu uso
 2. Como aplicar métodos e manipular seu valor

## O que é

A palavra funciona como o contexto que você está inserido.

```
  const pessoa{
    firstName: "André",
    lasName: "Soares",
    id: 1,
    fullName: function(){
      return `${this.firstName} ${this.lastName}`
    },
    getId: function(){
      return this.id
    }
  }

  pessoa.fullName() //André Soares
  pessoa.getId() //1
```

No exemplo acima são colocadas duas funções para valores do objeto pessoa. Quando uma função é atribuída à chave de um objeto, chamamos de **método**.

No caso acima o método .fullName é uma função que utiliza duas propriedades do objeto onde ele está inserido. Para isso, utilizamos o this para dizer que essas propriedades são do próprio contexto onde o método está inserido.

A mesma coisa ocorre com o método .getId, que precisa da propriedade "id" do objeto onde o método está declarado. Para se referir ao objeto o qual getId é método, utiliza-se a palavra "this".

### Contextos

Os contextos podem variar de acordo com o local no código onde se encontra:

|Contexto|Referência|
|--------|----------|
|Em um objeto método|Próprio objeto dono do método|
|Sozinha|Objeto Global (em navegadores, window)|
|Função|Objeto Global|
|Evento|Elemento que recebeu o evento|

