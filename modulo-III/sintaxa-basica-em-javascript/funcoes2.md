# Aprofundando em Funções

## Objetivos

1. Tipos de Funções
2. Funções aritméticas - Criando uma Calculadora

## Tipos de Função

### Funções Declarativas

São funções que possuem uso mais comum. Ela **DEVE** ser declarada utilizando a palavra reservada "function" seguida do nome da função, parênteses "()" e chaves "{}".

Nesse caso o nome da função é **OBRIGATÓRIO!**

**Exemplo:**

```
  function minhaFuncao() {
    console.log('Essa é minha funcao declarativa')
  } 
  
  minhaFuncao() // Essa é minha funcao declarativa
```

### Expressões de Funções

São funções atribuídas à variáveis. A nomeação das funções por expressão é opcional:

```
  var funcaoComNome = function minhaFuncao() {
    console.log('Essa é minha função por expressão com nome')
  }

  minhaFuncao() // Essa é minha função por expressão come nome
  funcao() // Essa é minha função por expressão come nome

  var funcaoSemNome = function (){
    console.log('Essa é minha funcao por expressão com nome')
  }

  funcaoSemNome() //Essa é minha funcao por expressão com nome
```

Perceba que no exemplo acima, quando um nome é atribuído à função, você pode invocá-la pelo nome dado à função, ou pelo nome da variável à qual a função foi atribuída.

Já quando a função não recebe nome, então é utilizado o nome da variável.

### Arrow Funtion

São funções de expressão de sintaxe curta. Arrow functions são sempre anônimas, ou seja, não podem receber um nome. Devem ser declaradas utilizando a seguinte estrutura:

```
  var minhaArrowFunction = () => {
    console.log('Essa é minha arrow function')
  }

  minhaArrowFunction() // Essa é minha arrow function
```

Perceba que é colocada um flecha na sua declaração, e por isso recebe o nome de "arrow function".

## Calculadora

Para acessar o documento com o script para a calculadora, basta acessar esse [**LINK**]