# Funções

Uma função é um pedaço do seu código que realiza uma ação pré-programada.

Uma função, assim como uma variável, também precisa ser declarada, e na sua declaração é estipulado o que ela vai fazer.

Uma das maneiras de declarar uma função está logo abaixo:

```
function soma (numero1, numero2) {
  return numero1 + numero2
}
```

No código acima, declaramos uma função responsável por somar dois números.

Perceba os segiuntes aspectos:
  - O nome é função é soma
  - Essa função precisa receber dois parâmetros (numero1 e numero2) que estão especificados dentro dos parênteses. Esses valores serão somados
  - A função devolve a soma dos valores, ou seja, a função disponibiliza o valor pra ser usado após sua invocação.
  - Nesse trecho do código a função não será executada, pois não foi solicitado que o fizesse.

Para executar a função, é necessário seguir o passo abaixo:

```
soma(3,5) //8
```

No código acima, a função é chamada, e sua execução retornará o valor 8.