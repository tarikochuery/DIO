# Manipulando um arquivo

## Objetivos

 1. Se familiar com a sintaxe da linguagem
 2. Entender a diferença entre variável e constante
 3. Ser capaz de comentar seu código

## Comentários

Para fazer um comentário, basta inserir // ao início da linha do código.

Caso deseje fazer um comentário com mais de uma linha, basta usar a estrutura:

``` 
/* Isso
é um comentário
de mais de uma linha */ 
```

## Variáveis

Uma variável é um valor que pode ter seu valor alterado a fim de fazer a mesma operação com valores diferentes.

Para a declaração da variável, basta usar a estrutura abaixo:

```
var preco = 2;
var desconto = 0.2;

preco = preco - desconto
```

No exemplo acima foram declaradas as variáveis preco e desconto.

e então a variável preço foi recalculando subtraindo os valores de preco e desconto.

Portanto a variável preco teve seu valor alterado.

É **importante** lembrar que o nome da variável deve deixar bem claro o que ela está armazenando para facilitar a leitura do código.

## Constantes

Uma constante, como o nome sugere, não pode ter seu valor alterado.

A constante é declarada da seguinte maneira:

```
const PRECO = 2
var desconto = 0.2

var total = PRECO - desconto
```

Perceba que nesse caso, o preço é uma constante e portanto não pode ser recalculado como no exemplo anterior, para isso, criamos uma nova variável que armazena o valor total da compra.

É uma boa prática declarar o nome das constantes inteiros em letras maiúsculas para auxiliar a diferenciar no código o que é uma variável e o que é uma constante.