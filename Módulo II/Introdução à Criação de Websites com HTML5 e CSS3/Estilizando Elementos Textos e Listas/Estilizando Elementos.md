# Estilizando Elementos

Já vimos como funciona uma estilização simples no box model. Entretanto, a estilizazção não precis amanter o mesmo espaçamento em todas as direções da região. Podemos alterar o espaçamento de cada lado da região da maneira que preferirmos, por exemplo o espaço de cima da margem ter 10px e a os espaço de baixo ter 50px.

## Espaçamentos Independentes

Há 3 maneiras diferentes de alterar os espaçamentos de uma região de maneira independente.

 1. **Utilizando dois valores para mesma propriedade**

    ```
      .post {
        padding: 10px 5px;
      }
    ```

    No exemplo acima o primeiro valor colocado para propriedade _padding_ se refere aos espaçamentos acima e abaixo da região de preenchimento, e o segundo valor se refere aos espaçamentos laterais.
    Caso queira analisar o box model no plano cartesiano, o primeiro valor se refere ao eixo Y, e o segundo valor ao eixo X.

 2. **Utilizando 4 valores para a mesma propriedade**

    ```
      .post {
        padding: 15px 10px 5px 0;
      }
    ```

    Nesse caso, cada valor se refere a um lado da região. O primeiro valor se refere ao topo da região de preenchimento. E então, os outros valores seguem no sentido horário. Logo, temos na sequência, direita, embaixo e esquerda com 0px.
    **OBS:** Quando utilizamos o valor 0, não é necessário expressar a unidade de medida.

 3. **Utilizando diferentes propriedades**

      ```
        .post {
          padding-top: 15px;
          padding-right: 10px;
          padding-bottom: 5px;
          padding-left: 0;
        }
      ```

      Nesse caso, evidenciamos na propriedade qual lado da região estamos aplicando o espaçamento atribuido no valor.
    Isso é mais comum quando tres lados da região têm o mesmo espaçamento e apenas um deles é diferente. Então utilizamos a propriedade geral, e na sequência a propriedade específica daquilo que queremos alterar.

## Background

A propriedade background também uma propriedade que pode alterar diversos estilos referente ao fundo do elemento selecionado.

```
  .post {
    background-color: green;
    background-image: url("bg.png");
    background-position: top;
  }
```

Esses são alguns exemplos de propriedades específicas da propriedade background.
É possível encontrar mais propriedades no site da [W3Schools](https://www.w3schools.com/css/css_background.asp), caso tenha mais curiosidades.

### background-color

Para este curso, focaremos mais na alteração da cor de fundo, utilizando a propriedade background-color.

Existem 3 maneiras diferentes para fazer essa estilização:

 1.

  ```
    .post {
      background-color: green;
    }
  ```

  Nesse caso, utilizamos a propriedade específica para selecionar a cor, e para o valor utilizamos o nome da cor que buscamos em inglês. Entretanto, não é indicado que o nome da cor seja utilizado.

  2. 

  ```
    .post {
      background-color: #008800;
    }
  ```

  Nessa outro caso, ainda utilizamos a propriedade específica para a cor de fundo, entretanto o valor utilizado é o código hexadecimal da cor que buscamos (verde). Esse caso é mais indicado por conta de boas práticas na estilização com CSS.

  3.

  ```
    .post {
      background: #008800;
    }
  ```
  Esse último caso, utiliza-se a propriedade genérica para estilizar o fundo do elemento com o valor hexadecimal da cor.

## Border

A propriedade border pode ter 3 valores:
 
 - Largura
    - A largura se refere à grossura da borda, então seus valores são númericos e precisam de unidades de medida (px, cm, mm...)
 - Cor
    - A cor se refere a cor que a borda deve ter, então os valores podem ser o nome das cores em inglês ou o código hexadecimal que é mais indicado (blue, #0000ff...)
 - Estilo
    - O estilo se refere ao formato da borda, então a borda por ser sólida, pontilhada, tracejada, entre outros estilos. O valor utilizado é o nome do estilo em inglês (solid, dotted, dashed...)

```
  .post {
    border: 3px solid blue;
    border-top: 2px dotted green;
    border-right: 4px dashed pink;
  }
```

No exemplo acima, podemos ver que a propriedade funciona como a propriedade de espaçamento, podemos alterar a borda como um todo, ou cada lado da borda pode ter uma estilização diferente.

Além disso, a propriedade border também tem propriedades mais específicas para alterar cada valor de maneira individual a fim de evidenciar isso ainda mais no código

```
  .post {
    border-width: 3px;
    border-color: #505050;
    border-style: solid;
  }
```

Nesse caso, utilizamos a propriedade específica para cada aspecto da borda que queremos estilizar.

Por fim, podemos utilizar a propriedade do aspecto específico da borda com qual lado queremos da borda queremos alterar e teremos uma propriedade mais específica ainda:

```
  .post{
    border-top-width: 3px;
    border-top-color: blue;
    border-top-style: solid;
  }
```

Nesse exemplo alteramos os aspectos específicos da parte de cima da borda.

### Border Radius

Esta propriedade específica da borda se refere ao arredondamento dos cantos da borda.

Podemos utilizar diversas unidades de medida, entretanto as mais comuns são pixels e porcentagem.

```
  .post {
    border-radius: 10px
  }

  .button {
    border-radius: 50%
  }
```

Quanto maior o valor atribuído a esta propriedade, mais arredondada serão os cantos da borda.

Podemos também alterar cada canto do nosso elemento de maneira independente, seguindo a mesma regra utilizada para a propriedade de espaçamento:

```
  .post {
    border-radius: 10% 15%;
  }

  .button {
    border-radius: 10% 15% 20% 25%;
  }
```

**DICA:** Se quiser transforma um elemento quadrado em uma circunferência, basta atribuir o valor 50% à propriedade border-radius.