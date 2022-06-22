# Estruturas condicionais

## Objetivos

 1. Estruturas Condicionais
 2. Estruturas de Decisão
 3. Estruturas de Repetição

## Estruturas Condicionais

São instruções para realizar determinada tarefa a partir de uma condição.

Essa condição pode ser análisada uma única vez, ou repetidas vezes.

**Exemplo:** Um jogo precisa mudar o placar toda vez que um jogador marcar um ponto.

## Estrutura de Decisão

### if

Podemos utilizar a palavra reservada 'if', para estabelecer uma condição:

```
  var jogador1 = 0
  var jogador2 = 0
  var placar

  if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto')
  } //
```

Nesse caso, nada será impresso no console, pois o valor atribuído à variável jogador1 é 0. Só seria impressa uma mensagem se o valor fosse maior que 0.

```
  var jogador1 = 1
  var jogador2 = 0
  var placar

  if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto')
  } // Jogador 1 marcou ponto
```

Nesse caso a mensagem foi impressa, pois a variável jogador1 tem valor 1 que é maior que 0.

### else

Quando a condição não for atendida, é possível que uma ação também seja executada. Para isso, podemos utilizar a palavra reservada 'else'.

```
  var jogador1 = 0
  var jogador2 = 0
  var placar

  if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto')
  } else {
    console.log('Ninguém marcou ponto!')
  } //Ninguém marcou ponto!
```

Perceba que apenas um dos dois comandos será executado, já que a condição posta não pode ser atendida e 'não-atendida' ao mesmo tempo.

### else if

Caso haja mais de duas possibilidades de ações, baseadads em diferentes decisões, podemos atrelar um if a outro coma a seguinte estrutura:

```
  var jogador1 = 0
  var jogador2 = 0
  var placar

  if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto')
  } else if (jogador2 > 0){
    console.log('Jogador 2 marcou ponto')
  } else {
    console.log('Ninguém marcou ponto!')
  } //Ninguém marcou ponto!
```

Na situação acima, temos o log "ninguém marcou ponto", pois nenhuma das duas condições colocadas foram atendidas, então a estrutura segue o escopo do comando "else".

```
  var jogador1 = 1
  var jogador2 = 0
  var placar

  if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto')
  } else if (jogador2 > 0){
    console.log('Jogador 2 marcou ponto')
  } else {
    console.log('Ninguém marcou ponto!')
  } //Jogador 1 marcou ponto
```

Nesse caso, o log apresentado no terminal é "Jogador 1 marcou ponto", pois a primeira condição colocada é atendida.

```
  var jogador1 = 0
  var jogador2 = 1
  var placar

  if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto')
  } else if (jogador2 > 0){
    console.log('Jogador 2 marcou ponto')
  } else {
    console.log('Ninguém marcou ponto!')
  } //Jogador 2 marcou ponto
```

Nesse caso, o log apresentado é "Jogador 2 marcou ponto", pois a primeira condição não é atendida, e a segunda condição foi atendida.

### Aninhamento de if

É possível colocarmos uma estrutura condicional if dentro de outra, e criar um ninho de if. Veja no exemplo abaixo, onde queremos fazer uma verificação para saber se o jogador foi iniciado com um valor válido:

```
  var jogador1 = -1
  var jogador2 = 0
  var placar

  if (jogador1 != -1){
    if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto')
    } else if (jogador2 > 0){
      console.log('Jogador 2 marcou ponto')
    } else {
      console.log('Ninguém marcou ponto!')
    }
  } else {
    console.log('O jogador 1 não é válido.')
  } //O jogador 1 não é válido.
```

Perceba que a primeira estrutura if tem uma condição que não é atendida. Portanto, o código dentro do escopo desse if não será executado, e por isso o log emitido no terminal é aquele dentro do último else.

```
  var jogador1 = 1
  var jogador2 = 0
  var placar

  if (jogador1 != -1){
    if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto')
    } else if (jogador2 > 0){
      console.log('Jogador 2 marcou ponto')
    } else {
      console.log('Ninguém marcou ponto!')
    }
  } else {
    console.log('O jogador 1 não é válido.')
  } //Jogador 1 marcou ponto
```

Nesse segundo exemplo, a condição do primeiro if é atendida, e por isso o código dentro do escopo dele é executado. Então outra estrutura condicional é apresentada, e a primeira condição é atendida, entrando no escopo dessa condição. Então o log "Jogador 1 marcou ponto" será transmitido no terminal.

### if Ternário

É uma forma de escrever a estrutura condicional em apenas uma linha. Ele é usado quando o comando a ser executado dentro das condições tem apenas uma linha. Veja no esquema abaixo como funciona a estrutura:

**Exemplo:** [condição] ? [Executar se true] : [Executar se false]

```
  jogador1 = 0

  jogador1 > 0 ? console.log('Jogador 1 marcou ponto') : console.log('Ninguém marcou ponto')
  //Ninguém marcou ponto
```

### Switch/case

O switch case é uma estrutura condicional, onde a condição a ser atendida é um valor exato. Nesse caso, a comparação a ser utilizada é apenas para valores idênticos e não um intervalo de valores. Veja no exemplo abaixo:

```
  var farol = 'verde'

  switch (farol){
    case 'verde'
      console.log('siga')
      break
    case 'amarelo'
      console.log('siga com cautela')
      break
    case 'vermelho'
      console.log('pare')
      break
    default
      console.log('valor inválido')
  } //siga
```

No exemplo acima, simulamos o funcionamento de um farol de trânsito. Dependendo da cor atribuída ao farol, uma mensagem diferente será escrita no terminal.

Ao lado do comando **switch** colocamos a variável que queremos fazer a verificação.

Ao lado de **case** colocamos o valor que a variável deve ter para executar o comando abaixo.

O comando **break** é necessário para que assim que o código dentro do escopo for executado, a leitura do código saia do escopo do switch/case, caso contrário, um looping será formado.

O comando **default** é utilizado para quando o valor atribuído à variável não atende a nenhum dos casos estipulados.

## Estruturas de Repetição

São estruturas que repetem um trecho de código até que uma determinada condição seja atendida.

Existem 5 estruturas que podemos utilizar para repetição:
 - for
 - for/in
 - for/of
 - while
 - do/while

### For

A estrutura for é construída a partir de 3 instruções obrigatórias:
  - Variável inicial
  - Condição
  - Incremento
Basicamente, a variável inicial funciona como um contador. 
A condição indica até qual número a contagem deverá ser feita. 
O incremento indica qual o valor a ser adicionado ao contador de maneira repetida (1 em 1, 2 em 2, etc...)

**Exemplo:**

```
for(let contador = 0; contador < 10; contador++){
  console.log(contador)
} //0
    1
    2
    3
    4
    5
    6
    7
    8
    9
```

 - Variável inicial: A variável contador funciona como o contador para nossa estrutura de repetição.
 - Condição: Enquanto a condição for verdadeira, o contador segue rodando.
 - Incremento: a estrutura escrita no código indica que ao contador está sendo somado o valor 1.

Dentro do escopo do for, o único comando solicita que seja mostrado no terminal o valor armazenado na variável contador.

**OBS:** O for é utilizado quando se sabe a quantidade de iterações que devem se feitas.

### For/in

Esta estrutura de repetição é utilizada quando se quer fazer iterações por todos os elemntos de um array, ou por todas as propriedades de um objeto.

Nesse caso, a variável estipulada na estrutura vai retornar o índice no caso de um array, ou o nome da propriedade no caso de um objeto.

Veja o **exemplo:**

```
  var array = ['valor 1', 'valor 2', 'valor 3', 'valor 4']

  for (let index in array){
    console.log(index)
  } // 0
       1
       2
       3
```

Nesse caso, perceba que o for faz iterações a partir dos índices do array.

```
  xicara = {
    cor: 'azul',
    tamanho: 'pequena',
    emEstoque: true
  }

  for (propriedade in object){
    console.log(propriedade)
  } //cor
      tamanho
      emEstoque
```

Percebe que os valores impressos são os nomes dados às propriedades e não os valores armazenados.

## For/of

Esta estrutura de repetição é bem parecida com for/in, porém o valor armazenado na variável criada na estrutura recebe o valor dentro do array.

**Exemplo:**

```
  var array = {'valor 1', 10, false, 'outro valor'}

  for (valor of array){
    console.log(valor)
  } //valor 1
      10
      false
      outro valor
```

No caso do objeto não é possível fazer a iteração com essa estrutura de repetição.

## While

Em inglês, while significa 'enquanto', e podemos lê-lo dessa forma no código. Basicamente, a estrutura repete o trecho de código enquanto uma condição for verdadeira.

**Exemplo:**

```
  var contador = 0
  while (contador < 10) {
    contador++
    console.log(contador)
  } // 1
       2
       3
       4
       5
       6
       7
       8
       9
       10
```

Perceba que enquanto o contador era menor que 10, então a iteração de imprimir o valor do contador no terminal foi executado. Ao início da execução, ele verifica o valor dentro da variável para executar o código novamente ou não.

**IMPORTANTE:** Lembre-se se sempre alterar a variável que está sendo analisada pela estrutura while, caso esta não seja alterada, o looping será infinito.

## Do/While

Esta estrutura de repetição funciona de maneira muito semelhante ao while. A diferença é que a verificação da condicional ocorre ao final do escopo, logo, se ao finalizar a execução a condição for falsa, a leitura segue para fora do escopo da estrutura.

**Exemplo:**

```
  var contador = 0

  do{
    contador++
    console.log(contador)
  } while (contador < 10) // 1
                             2
                             3
                             4
                             5
                             6
                             7
                             8
                             9
                             10
```