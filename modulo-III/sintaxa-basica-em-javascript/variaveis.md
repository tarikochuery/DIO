# Variáveis

## Objetivos
 1. Como funciona a tipagem JS
 2. O que são variáveis e como declarar
 3. Diferenças entre atribuição, comparação e comparação idêntica
 4. Operadores aritméticos, relacionais e lógicos

## Tipagem JavaScript

A tipagem funciona como uma regra para o uso de dados, quanto mais forte foa a tipagem da linguagem, mais obrigatório se torna a declaração do tipo de dado.

A tipagem em JavaScript é fraca, então a declaração de dados ocorre de forma dinâmica.

**Exemplo:** Ao declararmos uma variável utilizando as aspas (""), o Js já declara a variável como o tipo "string"

## Declaração de Variáveis

### Tipos Primitivos

As variáveis em Js podem guardar tipos de dados que chamamos de tipos primitivos:

- boolean
  - Apenas dois valores: true (verdadeiro) e false (falso)
- null
- undefined
- number
  - Apenas valores numéricos
- string
  - Qualquer texto, que seja escrito entre aspas ("")
- array
- object
- function

**OBS:** Existe uma função nativa chamada typeOf, que retorna o tipo da variável:

```
  var nome = 'meu nome'
  typeOf(nome) //string

  var numero = 10
  typeOf(numero) //number

  var bool = false
  typeOf(bool) //boolean
```

## Variáveis

São dados que podem variar os valores.

Ela funciona como um espaço na memória do computador. A qualquer momento este valor guardado na memória pode ser alterado.

### Declaração
Existem 3 maneiras de declarar variáveis

 - var: é uma variável genérica, pode ser alterada e tem escopo global, ou seja pode ser utilizada em todo o script e escopo local, ou seja pode ser utilizada em apenas um espaço delimitado do código. Caso não seja atribuído valor, será tratado como undefined.

 - let: variável que pode ter seu valor alterado e tem escopo local de bloco (será abordado mais a frente), se não for atribuído valor será tratada como undefined

 - const: não pode ter seu valor alterado, ou seja tem valor fixo, e obrigatoriamente tem q ter um valor inicial. É uma boa prática dar o nome de constantes com letras maiúsculas.

### Escopo

O escopo define a limitação e visibilidade do bloco de código, ou seja qual parte de código tem acesso a qual parte de código.

 - Escopo global: Quando a variável é declarada fora de qualquer bloco, ela pode ser usada por todo o código.

 - Escopo local: Quando uma variável é declarada dentro de um bloco, sua visibilidade e acesso nem sempre fica disponível para todo o código.

**Exemplo**

```
var escopoGlobal = 'global'
console.log(escopoGlobal) //gloal

function escopoLocal() {
  let variavelInterna = 'local'
}

console.log(variavelInterna)// erro
```

No exemplo acima, a função de log só conseguirá mostrar a variável escopoGlobal, pois essa variável se encontra no escopo global do código, ou seja, todo mundo no código consegue acessá-la.

Entretanto, a variavelInterna foi declarada dentro de uma função, e a função abre um escopo local, portanto, só tem acesso à variavelLocal o código que estiver dentro do escopo da função escopoLocal.

### Regras de uso

  1. Iniciar com letras, underline (_) ou cifrão ($). Nunca iniciar com número
      - **Exemplos:** var nome // var _nome
  2. Não utilizar espaços (use camelCase ou underline)
      - **Exemplos:** var nomeCompleto // var nome_completo
  3. Não utilize palavras reservadas pela linguagem (function, var, let, etc...)
      - **Exemplos:** var function // var else
  4. Declarar variáveis no topo do bloco do código que está trabalhando.

## Atribuição, Comparação e Comparação Idêntica

### Atribuição

O sinal de igualdade (=) em Js tem a função de atribuição

**Exemplo:** var nome = "Tarik"

Portanto, a plavra Tarik foi atribuída à variável nome.

## Comparação

Para comparar duas variáveis, e saber se ambas tem atribuídas o mesmo valor, utiliza-se dois sinais de igualdade (==).

**Exemplo:**

```
  var nome = 'Tarik'
  var sobrenome = 'Chuery'

  console.log(nome == sobrenome) //false
  console.log(nome == 'Tarik') //true
```

Perceba que no exemplo acima, o primeiro log imprime a comparação entre as variáveis nome e sobrenome, como tem valores diferentes, ele retorna false.
Já o segundo nome compara o valor dentro da variável nome com o valor 'Tarik', como são iguais, então ele retorna true

### Comparação Idêntica

Para realizar uma comparação idêntica, utiliza-se três sinais de igualdade (===). O intuito desta comparação não é apenas verificar se os valores são iguais, mas também se os tipos de variáveis são iguais.

**Exemplo:**

```
  var numero = 0
  var texto = '0'

  console.log(numero == texto) //true
  console.log(numero === texto) //false
```

No exemplo acima, as variáveis numero e texto tem o mesmo valor e por isso o primeiro log retorna true, entretanto os tipos de variáveis são diferentes, então o segundo log retorna false.

## Operadores

Constantemente na programação queremos fazer operações com os diferentes dados que guardamos nas variáveis, para isso existem os operadores. São 3 tipos de operadores que utilizamos.

### Operadores Aritméticos

Estes operadores são as operações matemáticas:

 - Adição (+)
 - Subtração (-)
 - Multiplicação (*)
 - Divisão Real (/) - Traz números decimais como resposta
 - Módulo (%) - Traz apenas o resto da divisão
 - Potenciação (**)

### Operadores Relacionais

Estes operadores comparam valores

  - Maior que (>)
  - Menor que (<)
  - Maior ou igual a (>=)
  - Menor ou igual a (<=)

### Operadores Lógicos

São tipos de operadores que consultam valores lógicos

  - "e" (&&) - Considera que para cumprir a condição, todas as comparações envolvidas tem que ser verdadeiras (true)
  - "ou" (||) - Considera que para cumprir a condição, apenas uma comparação tem que ser verdadeira
  - "não" (!) - Inverte o valor obtido na comparação