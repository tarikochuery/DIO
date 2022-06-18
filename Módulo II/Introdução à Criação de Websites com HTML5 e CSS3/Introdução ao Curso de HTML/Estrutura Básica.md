# Estrutura Básica HTML

## Elemento HTML

Tudo dentro do HTML é um elemento

 - Todo elemento começa com uma abertura
 - O elemento pode ter um ou mais atributos
 - O elemento pode ter um conteúdo
 - O elemento tem uma tag de fechamento

 **Exemplo**

 ``` <h1 class="titulo">Título</h1> ```

Nesse caso, o elemento é o h1 (Maior título possível)

O atributo é está dentro da abetura do elemento (```class = "titulo"```)

O conteúdo se encontra entre a tag de abertura e de fechamento do elemento.

----------------------------------------------------------------

## Estrutura do Documento

``` 
<!DOCTYPE html> 
<html>
  <head>
    <meta>
    <title></title>
  </head>
  <body>
  </body>
</html>
```

A estrutura ```<!DOCTYPE html>``` não é um elemento html, este tem como função informar ao navegador qual a versão do HTML foi utilizada para gerar o página web.

Na sequência é utilizado o elemento **HTML** para mostrar o início e o fim das informações que devem estar contidas na página web.

O elemento **HEAD** não indica o cabeçalho da página, sua função é armazenar os metadados que a página web deve mostrar ao navegador (Os metadados não são visíveis na página, eles apenas carregam informações para mostrar a outros softwares, apesar de não aparecerem para humanos, é importante que eles estejam ali.).

O elemento **META** é responsável por mostrar um metadado específico, que será evidenciado no atributo deste elemento. Para cada metadado deve ser adicionada uma tag meta. Por exemplo, temos o metadado charset que indica ao navegador qual o conjunto de caracteres que utilizaremos para a nossa página da web. _O elemento meta não tem uma tag de fechamento_.

O elemento **TITLE** traz o título do website, ele ficará visível na aba superior no navegador. O title, além de ficar visível, também é um metadado utilizado por buscadores para localizar seu site.

O elemento **BODY** é responsável por armazenar todo o conteúdo que será mostrado no site. Dentro dele fica toda a estrutura de conteúdo da página que o desenvolver deseja mostrar ao usuário do site.

Esta estrutura sempre será utilizada para construir qualquer documento HTML.

--------

## Projeto do Curso

O projeto do curso será um website pessoal do estudante.

O diretório do site se encontrará na pasta "Introdução à Criação de Websites com HTML5 e CSS3" e terá o nome de "Site Pessoal"