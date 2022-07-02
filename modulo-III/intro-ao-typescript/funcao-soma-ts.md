# Escrevendo Função Soma com TS

Para escrever a função soma, com a validação que o próprio Ts nos trás, podemos utilizar a estrutura abaixo:

```
function soma(a: number, b: number){
  return a + b
}
```

Caso você tente mais a frente chamar essa função no seu código com parâmetros que não sejam numéricos, o VSCode vai te apontar um problema do tipo:

```
O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.ts(2345)
```

Ou seja, no próprio ambiente de desenvolvimento, o erro já será apontando, evitando ainda mais os erros nas tentativas de produção.

**OBS:** Mesmo que você tente rodar o código com a mensagem de erro, caso não tenha problema com o JavaScript, o código funcionará normalmente.