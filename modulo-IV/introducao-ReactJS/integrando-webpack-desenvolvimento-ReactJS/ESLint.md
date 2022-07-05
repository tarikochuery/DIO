# ESLint

## Instalação

Utilizado para manter um padrão de desenvolvimento e uma qualidade de código.
Além o ESLint ajuda a prevenir uma série de possíveis erros.

Para instalar o ESLint, basta utilizar o comando abaixo no terminal:

```
npm i -D eslint babel-eslint eslint -plugin-react eslint-watch
```

E então é necessário fazer algumas configurações no projeto.

-----

## Configuração

É necessário que o arquivo ```.eslintrc``` seja criado na pasta raiz do projeto.

Dentro desse arquivo ficará toda a configuração do ESLint. Para saber como fazer a configuração, basta entrar no site do [ESLint](https://eslint.org/) e ler a documentação.

Aqui abaixo há uma estrutura base que você pode utilizar no seu projeto:

```
{
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "semi": [
      2,
      "always"
    ],
    "indent": [
      "error",
      2
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "no-extra-parens": "error",
    "max-len": [
      "error",
      {
        "code": 100
      }
    ],
    "no-multi-spaces": "error"
  },
  "settings": {
    "react": {
      "version": "16.8"
    }
  }
}
```

Com essa configuração feita no ESLint, falta apenas adicionar um script para executar o ESLint.
Para isso, nos scripts do ```package.json``` adicione a seguinte chave:

```
"eslint": "eslint ./src/*.js"
```

Dessa forma o ESLint vai faezr a varredura de todos os arquivos ```.js``` dentro da pasta src.