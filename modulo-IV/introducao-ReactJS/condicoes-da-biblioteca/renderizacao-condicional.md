# Conceitos aplicados aos tipos de dados e condições da Biblioteca

## Objetivos

 1. Renderização Condicional
 2. Listas e Chaves
 3. Manipulação de Eventos
 4. Pensando do jeito ReactJS

-------------

## Renderização Condicional

"Em React, você pode criar componentes distintos que encapsulam o comportamento que você precisa. Então, você pode renderizar apenas alguns elementos, dependendo do esatdo da sua aplicação."

### Conceitos

 1. Variáveis de Elementos
 2. If inline com o Operador Lógico &&
 3. If-Else inline com Operador Condicional
 4. Evitando que um Componente seja Renderizado

#### Variáveis de Elementos

Podemos atribuir um elemento JSX a uma variável da seguinte maneira:

```
const buttonA = <button> Primeiro Botão </button>
const buttonB = <button> Segundo Botão </button>
```

E então, para rendereizá-los em tela, podemos adicionar ao JSX de um componente:

```
const App = () => {
  return (
    <div>
      {buttonA}
      {buttonB}
    </div>
  )
}
```

E dessa forma, os elementos já serão renderizados na tela como botões.

--------

#### If inline com Operador Lógico &&

Quando queremos condicionar a renderização de um componente, podemos fazê-lo da seguinte maneira:

```
const hasClient = true
const buttonHistory = <button> Histórico de Clientes </button>

const App = () => {
  return (
    {hasClient && buttonHistory}
  )
}
```

Com o código acima, o botão ```buttonHistory``` será renderizado apenas se o valor da variável ```hasClient``` for verdadeiro.

---------

#### If-Else inline com Operador Condicional

Também podemos dar duas alternativas de renderização:

```
const hasClient = true
const buttonHistory = <button> Histórico de Clientes </button>
const buttonAddClient = <button> Cadastrar Cliente </button>

const App = () => {
  return (
    {hasClient ? buttonHistory : buttonAddClient}
  )
}
```

Entretanto, se desejar fazer a condicional com componentes, isso pode ser feito da seguinte maneira:

```
const hasClient = true

const ShowHistory = () => {
  return (
    <div>
      Mostrar Histórico de Clientes
      <button> Histórico de Clientes </button>
    </div>
  )
}
const AddClient = () => {
  return (
    <div>
      Cadastrar novo cliente
      <button> Cadastrar Cliente </button>
    </div>
  )
}
const App = () => {
  return (
    {hasClient ? ShowHistory() : AddClient()}
  )
}
```

-----

#### Evitando que um Componente seja Renderizado

Para evitar que um componente seja renderizado, podemos também construir uma condicional dentro dele:

```
  const hasClient = true

  const ShowClient = () => {
    if (!hasClient) return null

    return (
      <div>
        Nome do cliente: Tarik Chuery
      </div>
    )
  }

  const App = () => {
    <div>
     {ShowClient()}
    </div>
  }
```

Embora o ter 2 return dentro da mesma função não é muito recomendado com os componentes do React, o ```return null``` é uma forma de prevenir a renderização do componente.