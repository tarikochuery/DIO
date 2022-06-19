# Conceitos Básicos

O navegador interpreta cada elemento do HTML como uma caixa retangular chamado de Bom Model, como representa a imagem abaixo:

![Box Model CSS](Images/box-model.png "Box Model")

E com o CSS é possível alterar a aparência dessa caixa.

## Propriedades

O CSS visualiza 4 regiões envolvendo a caixa interpretada pelo navegador:

 1. **Margem:** É a região externa a caixa.
    - Algumas propriedades:
      1. margin
      2. margin-left
      3. margin-top
      4. margin-right
      5. margin-bottom
 2. **Borda:** A linha que contorna a caixa
    - Alguma propriedades:
      1. border
      2. border-color
      3. border-style
      4. border-radius
      5. border-width
 3. **Preenchimento:** Região interna entre a borda e o conteúdo
    - Algumas propriedades
      1. padding
      2. padding-right
      3. padding-bottom
      4. padding-left
      5. padding-bottom
 4. **Conteúdo:** Onde se localiza o conteúdo do elemento.

 Cada uma dessas regiões pode ser alterada por propriedades do CSS, principalmente envolvendo o tamanho do espaçamento nas regiões da margem e do preenchimento(padding).