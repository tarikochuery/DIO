# Protótipos e Classes

## Objetivos
 1. Apresentar o conceito de Protótipos e cadeia de Protótipos
 2. Apresentar a estrutura de Classes em JavaScript

## Protótipos

Os protótipos são o esqueleto dos objetos no JavaScript.
Todos os objetos herdam propriedades e métodos de um ```prototype```.
O objeto ```Object.prototype``` está no topo desta cadeia.

## Classes

As classes não existem nativamente no JavaScript, então sua escrita é chamada de syntatic sugar, ou seja, uma sintaxe feita para facilitar a escrita.

```
class Meal {
  constructor (food) {
    this.food
  }

  eat(){
    return '😋'
  }
}
```

Na realidade em JavaScript, sempre estamos utilizando objetos. Entretanto para facilitar a vida do programador, foi criada essa sintaxe após o ECMAScript 6.

```
class Animal {
  constructor(type = 'animal'){
    this.type = type
  }

  get type() {
    return this._type
  }

  set type(val) {
    this._type = val.toUpperCase()
  }

  makeSound() {
    console.log('Making animal sound')
  }
}

let a = new Animal()
console.log(a.type) //ANIMAL
```

Na estrutura acima é criada uma classe, e percebam que aqui temos algumas novidades.

### Método ```.constructor()```

Esse método deve ser colocado em todas as calsses, e é responsável por receber parâmetros para configurar alguma propriedades da classe instanciada.
No exemplo acima, o construtor vai configurar o tipo de animal na propriedade type. Para que isso seja feito, no momento que a classe for instanciada, o que ela receber de parâmetros será enviado diretamente ao construtor.
Nesse caso ainda, o construtor deixou um valor padrão para o tipo, caso no instaciamento não seja passado nenhum valor.

### Getters e Setters

Os getters são utilizados para acessar a propriedade de um objeto. No exemplo, para acessarmos o tipo do animal, precisamos utilizar o getter.
Da mesma forma, para alterar a propriedade type, é necessário utilzar o setter para poder acessar o valor type da classe.
Isso é importante por conta da questão do encapsulamento, ou seja apenas o tipo de um animal específico está sendo alterado, e não de todas as classes de animais.

----------

```
class Cat extends Animal{
  constructor{
    super('cat')
  }

  makeSound() {
    super.makeSound()
    console.log('Meow!')
  }
}

let b = new Cat()
console.log(b.type) //CAT
```

Já nesse segundo exemplo temos uma classe Cat que está herdando as propriedades e métodos da classe Animal.

### Método ```super()```

Esse método é um encurtamento da palavra superior. A função dele é mandar para o construtor da classe pai os parâmetros necessários para o instanciamento.
Perceba no exemplo que como parâmetro o super recebe um tipo de animal. E ao final, quando instanciada a classe Cat, foi feito um log com o tipo que retornou "CAT".

### Sobrescrição de métodos

É possível também sobrescrever métodos de classes pai. No exemplo acima, o método ```.makeSound()``` foi sobrescrito, e ent'ao foi acessado o método ```makeSound``` do classe pai através do objeto ```super```, e além dele, mais um log será realizado.