# Tipos de Funções

## Objetivos
 1. Estrutura de uma função
 2. Alguns outros tipos de funções e seus usos

## Estrutura

Funções são blocos de código que podem ser reutilizados em diversos locais do código.

```
  function nome(parametros){
    // instruções

    return //valor de retorno
  }
```

O **nome** da função deve ser utilizado para invocá-la no seu código.

O **parâmetro** da função são argumentos que serão utilizados pelos comandos dentro da função.

**IMPORTANTE:** Por conta do escopo local, as variáveis declaradas dentro da função só podem ser utilizadas dentro dela.

Para encerrar um função a palavra "return" deve ser utilizada.
Se fizer sentido, é possóvel que um valor seja retornado pela função, porém não é obrigatório.

## Outros Tipos de Função

### Função Anônima

Uma variável pode armazenar uma função:

```
  const soma = function (a, b) {
    return a + b 
  }

  console.log(soma(1, 2)) //3
  console.log(soma(3, 4)) //7
```

A função recebe o nome da variável ao qual ela foi atribuída.