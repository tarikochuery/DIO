# Funções

## Objetivos
 1. O que são funções
 2. Como declarar funções
 3. Funções com parâmetros

## O que são Funções

São blocos de comandos e instruções para a execução de determinada tarefa.

## Declaração da Função

```
  // Declaração de uma função
  funcao minhaFuncao() {
    console.log('Essa é minha função!')
  }

  // Invocando a Função
  minhaFuncao() //Essa é minha função
```

No exemplo acima, o primeiro bloco de código indica a delcaração da função, ou seja, nesse escopo você deve escrever o que a função irá realizar quando for invocada.

Na segunda parte há a invocação da função, e por conta disso o log "Essa é minha função" aparece no terminal.

## Funções com parâmetros

As funções podem receber, em sua declaração, parâmetros que serão utilizados como variáveis na execução do código.

Suponha que você queira desenvolver uma função que some dois valores quaisquer, mas você não sabe quais valores receberá. Para resolver esse problema, basta solicitar dois parâmetros para essa função, que serão o número somados:

```
  function soma (numero1, numero2){
    console.log(numero1 + numero2)
  }
```

Perceba que no exemplo acima, a função recebe os valores numero1 e numero2, e então retorna no terminal o resultado da soma deles.