# CSS

Com o surgimento do HTML viu-se a necessidade de estilizar as páginas da web, e em 1996 surgiu o CSS como uma linguagem de estilos.

Sua sintaxe é bem simples e consiste em criar regras de estilização para serem aplicadas na página com estrutura HTML

Para incluir o estilo no documento HTML é importante utilziar a tag link, dentro do elemento head, com alguns atributos:

```
  <link rel='stylesheet' href='style.css'/>
```

Para o valor do atributo href utilize o caminho para o arquivo css no seu diretório.

## Estrutura

A estrutura do CSS é determinada por um ou mais seletores, que são as tags do HTML, e para esses seletores é feita uma declaração colocada entre chaves.
A declaração consiste de uma propriedade e um valor.

**Exemplo**

``` 
    a, p, h1, h3 {
      color: blue;
      font-size: 14px;
    }
```

Nesse caso, os seletores são: 
 - a
 - p
 - h1 
 - h3

As declarações são:
 - ```color: blue```
 - ```font-size: 14px```

## ID e Classes

No exemplo anterior, utilizamos tags diretamente para fazer a declaração, o que acarretaria na alteração de todos os elementos com essas tags na nossa página.

Em caso de páginas mais complexas, é comum que elementos com a mesma tag tenham comportamentos de estilo diferentes, e para isso utiliza-se as classes e os IDs.

O seletor visto no exemplo anterior eram seletores de tipos, pois utilizamos tags HTML. Há também os seletores de classes e de IDs.

Para atribuir uma classe ou id a um elemento do HTML, basta utilizar os atributos class ou id.

Já no CSS, para utilizar o seletor de classe, basta utilizar o nome dado à classe precedido de um ponto (.) e para utilizar um id, basta digitar o nome dado ao id precedido do hashtag (#)

_OBS: o ID tem que ser único na página_

**Exemplo**

###### HTML

```
<header class='header'></header>

<header id='header'></header> 
```

###### CSS

```
.header {
  color: green;
} 

#header {
  color: blue;
}
```

## Cascata

O CSS utiliza o conceito de cascata para seus seletores.

No arquivo HTML percebemos que é possível o aninhamento de elementos (um elemento dentro de outro, e assim sucessivamente), e muitas vezes queremos estilizar um elemento específico dentro de outros sem estilizar os elementos "acima".

Para isso, se utiliza a seleção em cascata.

**Exemplo:**

Suponha que tenhamos o seguinte código no arquivo HTML:

```
  <article>
    <h3 class='ingredients-list-title'>Lista de Ingredientes</h3>
    <ul class='ingredients-list'>
      <li>Farinha</li>
      <li>Água</li>
      <li>Sal</li>
      <li>Fermento</li>
    </ul>
  </article>
```

Suponha que queremos estilizar apenas os itens da lista. Para isso, temos que acessar o elemento article, dentro dele o elemento ul, e dentro dele os elementos li. Então fazemos a seguinte seleção:

```
  article ul li {

  }
```

Dessa forma estamos alterando todos itens de listas que se encontram dentro de artigos. Se quisermos ser mais específicos, podemos utilizar a classe atribuída à lista:

```
  article .ingredients-list li {

  }
```

Desta forma acessamos todos os itens de lista que se encontram dentro do elemento com a classe "ingredients-list" que se encontram dentro do artigo.