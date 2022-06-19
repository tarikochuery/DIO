# Estilizando Textos

## font-family

Esta propriedade é responsável por alterar aa fonte do texto

É possível utilizar fontes instaladas na máquina ou fontes imporatdas da web

**web safe fonts:** Fontes que se encontram na grande maioria das máquinas, como verdana e arial.

```
  #title {
    font-family: Verdana;
  }

  .post{
    font-family: Verdana, Arial;
  }
```

No primeiro caso, foi adicionada apenas uma fonte à família, e na segunda foram adicionadas duas fonte, pois caso a primeira não funcione, a segunda se torna um backup.

## font-size

Essa propriedade é reponsável por alterar o tamanho do texto.

Podemos utlizar diversas unidades de medida para os valores dessa propriedade, por enquanto utilizaremos os pixels.

```
  #title {
    font-size: 30px;
  }

  .post_title {
    font-size: 18px;
  }
```

## font-style

Propriedade responsável por alterar o estilo do texto. Por padrão, o valor desta propriedade é "normal".

```
  #title {
    font-style: normal;
  }

  .subtitle {
    font-style: italic;
  }
```

No exemplo, alteramos o estilo do texto para _itálico_.

É importante lembrar se a fonte que estamos utilizando tem suporte para o tipo de estilização que estamos solicitando. Caso negativo, o navegador força a estilização e não obtemos o resultado esperado na maioria das vezes.

## font-weight

Esta propriedade é responsável por alterar o "peso" do texto, ou seja, a grossura das letras.

Existem diversos valores que podem ser utilizados, e não apenas numéricos, há também nomes para o tipo de peso que queremos.

Por padrão, o CSS define o valor "normal".

```
  #title {
    font-weight: normal
  }

  .subtitle {
    font-weight: bold
  }
```

Nesse exemplo, o valor "bold" torna a fonte em **negrito**.

## text-transform

Essa propriedade é responsável por variar a fonte entre maiúsculas e minúsculas.

 - uppercase -> Letras todas maiúsculas
 - lowercase -> Letras todas minúsculas
 - Capitalize -> Apenas a primeira letra maiúscula

```
  #title {
    text-transform: uppercase;
  }

  .subtitle {
    text-transform: lowercase;
  }

  .post-title {
    text-transform: capitalize;
  }
```

## text-decoration

Esta propriedade é muito utilizada para dar destaque ao texto, pois coloca linhhas.

 - underline -> Coloca uma linha abaixo do texto, como um sublinhado
 - overline -> coloca uma linha acima do texto
 - line-through -> faz um risco simples no texto

```
  #title {
    text-decoration: underline;
  }

  .subtitle {
    text-decoration: overline;
  }

  .post-title {
    text-decoration: line-through;
  }
```

