# Interagindo com elementos no DOM

## DOM

Document Object Model - Basicamente, o DOM é a estrutura dos elementos dentro da janela da web.

## Manipulando Elementos

Para selecionar um elemento através de sua tag, basta utilizar o comando:

```
  document.getElementsByTagName('h1')
```

Dessa forma, você pode atribuir seu elemento em uma variável e assim manipular esse elemento de uma for mais fácil, por exemplo:

```
  var h1 = document.getElementsByTagName('h1')
```

Assim, agora todos os elementos h1 no documento HTML estão armazenados em uma lista, dentro da variável h1.