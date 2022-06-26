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

## Variáveis

São dados que podem variar os valores.

Ela funciona como um espaço na memória do computador. A qualquer momento este valor guardado na memória pode ser alterado.

### Declaração
Existem 3 maneiras de declarar variáveis

 - var: é uma variável genérica, pode ser alterada e tem escopo global, ou seja pode ser utilizada em todo o script e escopo local, ou seja pode ser utilizada em apenas um espaço delimitado do código. Caso não seja atribuído valor, será tratado como undefined.

 - let: variável que pode ter seu valor alterado e tem escopo local de bloco (será abordado mais a frente), se não for atribuído valor será tratada como undefined

 - const: não pode ter seu valor alterado, ou seja tem valor fixo, e obrigatoriamente tem que ter um valor inicial. É uma boa prática dar o nome de constantes com letras maiúsculas.

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

### Hoisting
O conceito de Hoisting é importante para entender qual a melhor maneira de declarar uma variável.

Hoisting vem do inglês de "elevamento, içamento". Na programação a variáveis podem ser elevadas para o topo do código, logo não existe problema em usar uma variável e declará-la após seu uso.

As variáveis declaradas com a palavra "var" tem essa característica de hoisting. Entretanto, as variáveis declaradas com "let" não tem essa propriedade.

**Exemplo:**

```
  mensagem = 'Minha mensagem!'

  console.log(mensagem)

  var mensagem // Minha mensagem!
```

No exemplo acima a estrutura é aceita pelo interpretador, por conta da propriedade de hoisting das variáveis declaradas com var.

```
  mensagem = 'Minha mensagem!'

  console.log(mensagem)

  let mensagem // erro
```

Nessa segunda estrutura, ocorre o erro, pois a variável declarada com a palavra 'let' não tem a propriedade hoisting, então, ele não é levado para o topo do script.
Portanto, a variável está sendo utilizada antes de ser declarada.

### Regras de uso

  1. Iniciar com letras, underline (_) ou cifrão ($). Nunca iniciar com número
      - **Exemplos:** var nome // var _nome
  2. Não utilizar espaços (use camelCase ou underline)
      - **Exemplos:** var nomeCompleto // var nome_completo
  3. Não utilize palavras reservadas pela linguagem (function, var, let, etc...)
      - **Exemplos:** var function // var else
  4. Declarar variáveis no topo do bloco do código que está trabalhando.

### Tipos Primitivos

As variáveis em Js podem guardar tipos de dados que chamamos de tipos primitivos:

- boolean
  - Apenas dois valores: true (verdadeiro) e false (falso)
- null
- undefined

-------------

#### String

Strings são estruturas de dados que armazenam textos.
Para declarar este tipo de estrutura, você deve colocar seu texto entre aspas, duplas ("") ou simples('').

```
  var texto = 'Minha String'
```

Outra maneira de declará-la, porém menos usual está abaixo:

```
  var texto = new String('Minha String')
```

Nesse segundo caso o tipo do dado é um objeto.

##### Manipulando de Strings

###### Acessar Caractere

É possível acessar um caractere de uma string pela posição que ele ocupa no texto.

Suponha uma variável nome que armazena o valor "Carlos", e você queira acessar a letra "r". Repare que a letra desejada está na 3ª posição.

É importante saber que na lógica de programação, a primeira posição tem número 0 como índice, em qualquer tipo de dado com essa característica.

Logo, para o computador, o índice da letra "r" em "Carlos" é 2.

```
  let nome = "Carlos"

  console.log(nome[2]) //r
```

Perceba no exemplo acima que para acessar o conteúdo em determinado índice da minha string, eu utilizo os colchetes "[ ]" na frente do nome da variável, e dentro dos colchetes segue o índice que quero acessar.

###### Concatenação

Através da concatenação podemos juntar duas ou mais strings em uma única variável, ou quando queremos gerar uma string ainda maior para apresentar ao usuário.

Há algumas formas de fazer a concatenação:

  1. **Método .concat()**
    
      ```
        let nome = 'João'
        let sobrenome = 'Pedro'

        let concatenado = nome.concat(sobrenome)

        console.log(concatenado) //JoãoPedro 
      ```

      A nova variável concatenado é uma string que contém o valor das variáveis nome e sobrenome juntas numa única variável.

  2. **Operador "+"**

      ```
        let concatenado = nome + " " + sobrenome

        console.log(concatenado)//João Pedro
      ```

      Perceba na estrutura acima que o valor armazenado na variável concatenado é a união de 3 strings, as duas declaradas anteriormente nas variáveis nome e sobrenome, e mais uma, colocada diretamente na operação de concatenação que é o espaço entre as strings.

      Nesse caso, o operador "+" para strings tem a função de concatenar as strings.

      Além de criar um espaço, é possível fazer uma quebra de linha na sua string:

      ```
        let concatenado = nome + '\n' + sobrenome
        
        console.log(concatenado) //João
                                   Pedro
      ```

      Existem diversos comandos que podem ser utilizados com a função "escape ( \ )" do Js. Nesse caso utilizamos a quebra de linha com o comando "\n".
      Para encontrar outros comandos basta procurar "JavaScript Escapes"

  3. **Template Literals**

      ```
        let concatenado = `${nome} ${sobrenome}`
      ```
      Com a atualização do ESC6, surgiu o Template Literals, que é uma forma de declarar strings dentro de crases. Assim, não há a necessidade de se preocupar com os escapes e nem com operadores que complicam a sintaxe do código.
      Para utilizar o valor em variáveis, basta utilizar a estrutura do exemplo: ${variável}

###### Length

A propriedade lenght de uma string retorna a quantidade de caracteres que a string contem.

```
  let nome = 'Carlos'

  console.log(nome.lenght) // 6
```

###### Método .split()

O método .split() tem a função de separar sua string em partes, utilizando o separador que você desejar:

```
  let frase = "Olá, tudo bem?"

  console.log(frase.split("")) //["O", "l", "á", ",", " ", "t", "u", "d", "o", " ", "b", "e", "m", "?"] 
```

Perceba que eu selecionei uma string vazia como separador que eu gostaria de utilizar, então o método retorna uma lista (falaremos ainda nesse doc sobre ela) com todos os caracteres separadamente na string.

```
  let frase = "Olá, tudo bem?"

  console.log(frase.split(" ")) //["Olá,", "tudo", "bem?"]
```

Nesse segundo exemplo, eu passo como parâmetro (dentro dos parênteses do método) uma srting apenas com um espaço. Esse parâmetro é o meus separador, logo, o Js entende que sempre que o caractere " " aparacer deve-se encerrar uma string e começar uma nova.

```
  let nome = "Carlos"

  console.log(nome.split("r")) //["Ca", "los"]
```

Nesse caso o separador que eu escolhi foi a letra "r", então o Js entende que o que vier antes do "r" é uma string, e o que vier depois é outra string, e o separador é descartado.

**OBS:** Esse método não altera o valor armazenado dentro da variável, mas gera um dado a mais, sem alterar o anterior.

###### Método .includes()

Esse método pode retornar apenas dois valores (true, false) e sempre retornará um deles. A ideia é fazer uma busca por uma string específica dentro da sua string

```
  let frase = "Olá, tudo bem?"

  console.log(frase.includes("tudo")) //true

  console.log(frase.includes("você")) //false
```

No exemplo acima, utilizamos o método includes inicialmente para buscar a string "tudo" dentro da variável nome. Como o método encontrou a string "tudo", então ele retorna true.

Já no segundo momento, é buscada a string "você" na variável frase, e como isso não ocorre, então é retornado o valor false.

###### Método startsWith()

Esse método faz a confirmação do início de uma string. Porém é necessário que seja informado qual string você que verificar, e isso será passado por parâmetro:

```
  let nome = "Roberto"

  console.log(nome.startsWith("R")) //true

  console.log(nome.startsWith("S")) //false
```

No primeiro é perguntado se a variável nome começa com a string "R", o que é verdade, então retorna-se o valor true.

Então o método é utilizando novamente porém verificande se a variável nome começa com a string "S", e como não ocorre, então é retornado o valor false.

###### Método endsWith()

O método é idêntico ao startsWith(), porém para verificar o final da string desejada.

```
  let nome = "Roberto"

  console.log(nome.endsWith("R")) //false

  console.log(nome.endsWith("o")) //true
```

###### Método .replace()

Esse método retorna uma string, sem modificar a anterior:

```
  let frase = "Olá, tudo bem?"

  console.log(frase.replace("bem", "certo")) // Olá, tudo certo?
```

O método deve receber dois parâmetros, a string que você quer substituir, e qual string entrará no lugar.

No exemplo acima, foi solicitado que da variável frase substituíse a string "bem" pela string "certo".

--------------

#### Numbers

São apenas valores numéricos que podem ser inteiros ou decimais.

Os números são mais simples, pois as operações feitas com essa estrutura de dados são operações matemáticas básicas:

##### Operações

###### Soma (+)

```
  let soma = 5 + 3

  console.log(soma) //8
```

Podemos somar dois valores e atribuir essa soma à uma variável. Ou podemos, também, somar duas ou mais variáveis:

```
  let preco = 10
  let gorjeta = 2
  let total = preco + gorjeta

  console.log(total) //12
```

Quando fazemos a soma de duas variáveis, não há alterações nas variáveis envolvidas na operação.

###### Subtração (-)

Funciona de maneira idêntica à soma:

```
  let diferenca = 5 - 3

  console.log(diferenca) //2
```

###### Multiplicação (*)

```
  let produto = 5 * 3

  console.log(produto) //15
```

###### Divisão (/)

```
  let divisão = 9 / 3

  console.log(divisão) //3
```

###### Resto da Divisão (%)

```
  let resto = 5 % 3

  console.log(resto) //2
```

###### Potência

```
  let potencia = 5 ** 3

  console.log(potencia) //125
```

##### Biblioteca Math

Math é um objeto dentro do JavaScript, como mais opções de operações matemáticas mais avançadas.

Por exemplo, pode-se utilizar o número pi, ou a operação de raiz quadrada.

###### Método Math.floor()

Esse método faz o arredondamento de um número para o inteiro mais próximo menor que o número passado como parâmetro:

```
  console.log(Math.floor(1.75)) //1
```

###### Math.ceil()

Já o método .ceil() faz o arredondamento para cima do número passado como parâmetro:

```
  console.log(Math.ceil(1.75)) //2
```

------------

#### Boolean

Os valores booleanos seguem a lógica binária, então temos apenas dois valores possíveis:

 - true
 - false

Os valores booleanos são retornados sempre para validações.

```
  let trueStatement = 3 === 3
  let falseStatement = 2 === 5

  console.log(trueStatement) //true
  console.log(falseStatement) //false
```

Perceba, foram atribuídas comparações às variáveis. Quando a validação é verdadeira, o valor true foi armazenado à variável, e quando não era verdadeira, foi armazenado o vaçor false.

##### Operação negativa (!)

É possível inverter o valor booleano com o sinal de exclamação (!):

```
  let trueVariable = true

  console.log(!trueVariable)// false
```

Basta colocar o sinal de negação (!) à frente da variável com valor boleano, que o valor será invertido. Entretanto o valor armazenado na variável não é alterado.

-----

### Outras Estruturas de Dados

- array
- object
- function

Essas outras estruturas serão abordadas mais à frente para vermos suas estruturas, propriedades e métodos mais a fundo.

**OBS:** Existe uma função nativa chamada typeOf, que retorna o tipo da variável:

```
  var nome = 'meu nome'
  typeOf(nome) //string

  var numero = 10
  typeOf(numero) //number

  var bool = false
  typeOf(bool) //boolean
```

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