# Interfaces

As interfaces são contratos construídos no TypeScript. Essas Interfaces vão ditar como um objeto ou uma classe deve ser construído, ou seja, quais propriedades ele deve conter. E até quais valores a propriedade pode aceitar:

```
  interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático'
  }

  const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre'
  }
```

Quando criamos a interface, estipulamos como se fosse o tipo do objeto. Logo, ele tem propriedades bem definidas.
O mais legal é que o VSCode te dá as sugestões que você pode utilizar uma vez que a interface é adotada para um objeto.
Para receber as sugestões basta utilizar o comando ```'CTRL' + 'barra de espaço'``` e o VScode já lista as opções.

----------

As interfaces também podem ter interfaces filhas:

```
  interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático'
  }

  interface IFelino extends IAnimal {
    visaoNoturna: boolean
  }

  const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaNoturna: true
  }
```

Perceba que o comportamento da interface é bem parecida com o comportamento de uma classe quando tratamos da característica de herança.

---------

É possível também adicionar métodos às interfaces e não apenas estruturas de dados:


```
  interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático'
  }

  interface IFelino extends IAnimal {
    visaoNoturna: boolean
    executarRugido(alturaEmDecibeis: number): void
  }

  const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaNoturna: true
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis} dB`)
  }
```