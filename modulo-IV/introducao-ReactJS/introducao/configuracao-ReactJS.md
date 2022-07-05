# Configuração

Há algumas maneiras de configurar o React:

 1. React Create App
 2. React Scripts
 3. Task Runners e Bundler Sizers

--------

## Utilizando React Scripts

Para fazer uma configuração básica do seu projeto em react utilizando o React Scripts, você deve iniciar um projeito com o NPM para ter os arquivos ```package.json``` e ```package-lock.json```, além do diretório ```node-modules``` atráves do comando abaixo no seu terminal, dentro do diretório desejado:

```
npm init
```
-----------

Na sequência, no seu projeto vc vai precisar instalar o React e algumas depedências mais utilizando o seguinte comando:

```
npm i --save react react-dom react-scripts
```

A flag ```--save``` é utilizado para que as dependências instaladas sejam apenas para o ambiente de desenvolvimento.
O reactDOM é uma dependência necessária para que seu projeto seja renderizado com a tecnologia proposta pelo React, e o react-scripts é utilizado para uma configuração mais facilitada do seu projeto.

---------

Com todas as instalações realizadas, é necessário que a pasta ```public``` seja criada, e dentro dela deve haver um arquivo ```index.html``` com a seguinte estrutura:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Se desejar, não é necessário incluir as metatags presentes no header, o principal é a div com o id 'root', pois esse elemento será utilizado para a renderização do projeto.

-----------

Ainda no diretório principal deve ser criada a pasta ```src``` com os arquivos ```styles.css``` e ```index.js```. O styles.css será responsável pela estilização global da sua aplicação, então a estrutura vai depender de como você deseja estilizar seu projeto.
Já o index.js deve ter uma estrutura parecida com a abaixo:

```
import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
  return (
    <div className='App'>
      Hello World
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Nesse caso, são importados os módulos necessários para que o código possa ser compilado.
Há a arrow function App que será responsável pelo componente principal da sua aplicação. Perceba que no retorno há uma estrutura parecida com HTML, e essa é a proposta do React.
Abaixo da função está o código responsável pela renderização do projeto. O rootElement é a div presente lá no arquivo HTML.
O objeto ReactDOM tem um método para renderizar a estrutura na função App.

---------

## O que é JSX

O JSX é uma linguagem de marcação criada para que o JS pudesse ser utilizado no seu HTML. Dessa forma, estruturas como a abaixo são comuns:

```
const element = <h1> Hello World! </h1>
```

----------

O React não separa as tecnologias colocando marcação em arquivos separados, e sim separa os conceitos e mantém o código pouco acoplado chamando-os de componentes.

Não é obrigatório a utilização do JSX

Sintx Suggar para ```React.createElement()```.

O browser não interpreta o JSX, para isso é necessário um transpilador para que a aplicação passa entender o código. O mais utilizado é o Babel.

----------

### Exemplo

Como exemplo, podemos utilizar aquela estrutura de index.js que vimos acima:

```
import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

function meuPrimeiroJSX() {
  return (
    <div>
      Tarik Chuery - Introdução a ReactJS
    </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      {meuPrimeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Perceba que no código acima, foi adiciona a função ```meuPrimerioJSX()``` que retorna uma estrutura HTML. E então para fazer a renderização do que estava presente ali, chamamos a função dentro do JSX da função ```App()```. Perceba que para utilizar Js no JSX, é necessário que o código esteja entre chaves.

Veja este outro exemplo:

```
import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

function sum(a, b) {
  return a + b
}

function meuPrimeiroJSX() {
  return (
    <div>
      Tarik Chuery - Introdução a ReactJS
      <h1> Soma: {sum(10, 20)} </h1>
    </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      {meuPrimeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Perceba que a diferença foi o acréscimo da função ```sum(10, 20)``` no JSX da função ```meuPrimeiroJSX()```. O legal é que o que será renderizado é o retorno da função.