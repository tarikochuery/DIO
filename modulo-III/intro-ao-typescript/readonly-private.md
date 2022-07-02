# Variáveis com propriedades ReadOnly

Ao declarar um objeto, é possível que suas propriedades tenham a característica Readonly.
Essa característica não permite que o valor dentro do objeto possa ser alterado:

```
interface Cachorro {
  nome: string
  idade: number
  parqueFavorito?: string
}

const meuCachorro: Readonly<Cachorro> = {
  nome: 'Sandália',
  idade: 2
}

meuCachorro.idade = 10

//Não é possível atribuir a 'idade' porque é uma propriedade de somente leitura.ts(2540)
```

Perceba que na declaração do objeto, é colocado um diamante com a característica Readonly em frente, e dentro a interface a ser adotada para o objeto.