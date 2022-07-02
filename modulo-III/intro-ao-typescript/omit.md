# Omit

O Omit, assim como o Readonly, é um tipo utilitário.
O Omit tem como função excluir uma propriedade de uma interface para uma determinada variável:

```
interface Pessoa {
  nome: string
  idade: number
  nacionalidade: string
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {}

const pessoa: Brasileiro = {
  nome: 'Julio',
  idade: 29
}
```

O código acima não apresentaria erros, pois a interface Brasileiro descarta a necessidade da propriedade 'nacionalidade'.