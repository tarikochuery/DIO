# Manipulando Eventos

Manipular eventos em elementos React é muito semelhante a manipular eventos em elementos do DOM.
Existem algumas diferenças sintáticas:

 - Eventos em React são nomeados usando camelCase ao invés de letras minúsculas.
 - Com o JSX você passa uma função como manipulador de eventos ao invés de um texto.

## Conceitos

 1. Eventos
 2. Passando Argumentos para Manipuladores de Eventos

------

### Eventos

Podemos manipular eventos de maneira be m parecida com o JS Vanilla:

```
const App = () => {

  const handleClick = () => {
    alert('Cliente Deletado')
  }

  return (
    <div>
      <button onClick={handleClick}>Deletar Cliente</button>
    </div>
  )
}
```

Como podemos ver, o argumento para manipulação do evento é escrito em camel case, e a função passada como valor é passada apenas como a função JS.

----------

### Passando Argumentos para Manipuladores de Eventos

Da mesma forma, se precisamos de uma variável para passar como argumento do nosso manipular de evento que esteja no escopo do componente, também é possível com uma callback:

```
const App = () => {

  const handleClick = (name) => {
    alert(`Cliente ${name} Deletado`)
  }

  const client = {
    name: 'Tarik',
    id: 1
  }

  return (
    <div>
      <button onClick={() => {handleClick(client.name)}}>Deletar Cliente</button>
    </div>
  )
}
```

Não é possível executar a função dentro do valor do manipulador de evento, então, é passada uma função anônima que executa a função desejada.