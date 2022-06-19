## Estilizando Listas

Basicamente, utilizamos o CSS para alterar os marcadores das listas ordenadas e não-ordenadas

## list-style-type

Para essa propriedade, os valores utilizados dependem não só da propriedade, mas também do tipo de lista que está sendo utilizada no HTML.

### Lista Ordenada (ol)

No caso de listas ordenadas, podemos usar os seguintes marcadores:
 - Indo-arábicos: decimal
 - Literais-minúsculos: lower-alpha
 - Literais-maiúsculos: upper-alpha
 - Romanos-minúsculos: lower-roman
 - Romanos-maiúsculos: upper-roman

**OBS:** Por padrão, o CSS configura o valor decimal

```
  ol {
    list-style-type: upper-roman
  }
```

No exemplo, todas as listas ordenadas no HTML terão marcadores romanos maiúsculos.

### Listas não-ordenadas (ul)

Para listas não-ordenadas, existem diversos marcadores de acordo com os valores passados a propriedade:
 - Pontos pintados: disc
 - Pontos abertos: circle
 - Quadrados: square
 - Sem marcador: none

É possível também adicionar "emojis" ao marcador, basta utilizar o código do emoji entre aspas.

**OBS:** Por padrão, o valor passado pelo CSS é disc

```
  ul {
    list-style-type: circle
  }
```

Nesse caso, a lista não-ordenada tem como marcador o círculo vazado.

Ainda é possível adicionar imagens persolnalizadas aos marcadores, basta utilizar o seguinte valor com a propriedade "list-style-image":

```
  ul {
    list-style-image: url("rocket.png")
  }
```