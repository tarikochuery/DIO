# Criando Erros Personalizados

## Objetivos

 1. Explicar como manipular o objeto Error

## O Objeto Error

Para se criar um erro, é necessário sempre fazer a instância desse objeto com a palavra new.

Além disso, é possível passar alguns parâmetros para a criação do objeto Error:
 - mensagem
 - Nome do arquivo
 - número da linha

Veja no exemplo:

```
  const myError = new Error('Mensagem Inválida')

  throw myError // Error Mensagem Inválida
```

Perceba que o erro foi armazenado em uma constante, e em seu instanciamento só foi passado o parâmetro da mensagem, que o mais comum a ser feito.

Além de declarar o erro com uma mensagem, é possível alterar o nome do erro da seguinte maneira:

```
  const myError = new Error('Mensagem Inválida')

  myError.name = 'InvalidMessage'

  throw myError //Error InvalidMessage: Mensagem Inválida
```