# Generic Types

Os tipos genéricos são utilizados quando não sabemos quais tipos de dados a função irá receber, e nem qual o tipo de dado a função pode retornar.

Imagine que você tem um array, e a cada elemento dele você deseja fazer uma iteração e substituir o valor antigo:

```
  function adicionaApendiceALista<T>(array: T[], valor: T){
    return array.map(() => valor)
  }

  adicionaApendiceALista([1, 2, 3], 4) //[4, 4, 4,]
```

Para esse caso, foi adicionado um diamante à função, onde é passado o parâmetro ```T```, que por convenção indica um tipo genérico.

Aos parâmetros também é passado um tipo genérico, porém para o array a notação é um pouco diferente para simbolizar que é um array.