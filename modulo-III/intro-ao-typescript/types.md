# Types

Os types no TypeScript tem uma sintaxe bem parecida com as interfaces:

```
  type IAnimal = {
    nome: string
    tipo: 'terrestre' | 'aquático'
  }
```

Perceba que tem uma diferença na palavra reservada da declaração, e que há o sinal de atribuição.

Entretanto, para construção de contratos de estruturas de dados, utiliza-se comumente as interfaces.

Os types são utilizados para juntar interfaces, por exemplo:

```
  interface IAnimal {
    nome: string
    tipo: 'terrestre' | 'aquático'
    domestico: boolean
  }

  interface IFelino extends IAnimal {
    visaoNoturna: boolean
  }

  interface ICanino extends IAnimal {
    porte: 'pequeno' | 'médio' | 'grande'
  }

  type IDomestico = ICanino | IFelino

  const animal: IDomestico = {
    nome: 'cachorro',
    tipo: 'terrestre',
    domestico: true,
    porte: 'médio'
  }
```

Nesse caso, perceba que o tipo ```IDomestico``` poderá se comportar como uma das duas interfaces: ```ICanino``` ou ```IFelino```.

Isso porque na declaração do tipo IDomestico foi utilizado o sinal de 'ou', representado pelo '|'.

Entretanto há como fazer a junção das interfaces com o sinal de 'e' representado pelo '&'.