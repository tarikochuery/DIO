# Listas e Chaves

## Conceitos

 1. Renderizando Múltiplos Componentes
 2. Componente de Lista Básico
 3. Chaves
 4. Extraindo Componentes com Chaves
 5. Chaves devem ser Únicas apenas entre Elementos Irmãos

-------

### Renderizando Múltiplos Componentes e Componente de Lista Básico

Suponha que você tenha uma lista de objetos cliente com nome e id, e quer mostrar o nome de todos eles no projeto:

```
const clientsList = [
  {
    nome: 'Tarik Chuery',
    id: 1
  },
  {
    nome: 'Bruna Chuery',
    id: 2
  },
  {
    nome: 'Fulano de Tal',
    id: 3
  },
  {
    nome: 'Jorge Ciclano',
    id: 4
  },
]

const renderClients = (client, index) => {
  return (
    <li>{client.nome}</li>
  )
}

const App = () => {
  return (
    <div>
      <h1>Lista de Clientes</h1>
      <div>
        <ul>
          {clientsList.map(renderClients)}
        </ul>
      </div>
    </div>
  )
}
```

Nesse caso, é muito comum utilizar o método de arrays ```.map()``` para fazer a renderização de diversos componentes. O map vai passar como parâmetro na função utilizada tanto o elemento da lista quanto o seu índice, por isso a função ```renderClients()``` recebe o client e o index como parâmetros.

----------

### Chaves

Quando fazemos a renderização de diversos elementos de uma lista, provavelme o React vai apontar um problema com relação a chave de cada elemento. Ele vai dizer que cada elemento irmão deve ter uma única chave.
A ideia dessa chave única está atrelada com o fato de que o React sempre monitora todos os elementos do DOM virtual para que faça uma atualização apenas no componente alterado. Quando os componentes parecem iguais, o React pode ter dúvidas na hora de fazer uma atualização, e pode fazer a atualização mais de uma vez ou não fazer a atualização.
Para sanar esse problema, basta adicionar o argumento key ao elemento criado passa como valor uma chave única, e muitas vezes o índice do elemento da lista já é suficiente:

```
const renderClients = (client, index) => {
  return (
    <li key={`cliente - {index}`}>{client.nome}</li>
  )
}

const App = () => {
  return (
    <div>
      <h1>Lista de Clientes</h1>
      <div>
        <ul>
          {clientsList.map(renderClients)}
        </ul>
      </div>
    </div>
  )
}
```

Ou se o elemento gerar também um id único é melhor ainda do que utilizar o índice do elemento. No nosso caso, a lista de clientes atribui a cada cliente um id único, então podemos gerar a chave dessa forma também:

```
const renderClients = (client, index) => {
  return (
    <li key={`cliente - {client.id}`}>{client.nome}</li>
  )
}

const App = () => {
  return (
    <div>
      <h1>Lista de Clientes</h1>
      <div>
        <ul>
          {clientsList.map(renderClients)}
        </ul>
      </div>
    </div>
  )
}
```