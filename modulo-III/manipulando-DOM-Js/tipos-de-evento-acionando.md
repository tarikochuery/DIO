# Eventos

## Objetivos

 1. Explicar o que são Eventos
 2. Apresentar os eventos mais comuns
 3. Ensinar como acionar os eventos

## Tipos de Eventos

Eventos do mouse:
  1. mouseover
      - Evento que ocorre ao passar o mouse por cima de um elemento 
  2. mouse out
      - Evento que ocorre ao retirar o mouse de cima de um elemento

Eventos de clique:
  1. click
      - Evento que ocorre ao clicar em um elemento
  2. dbclick
      - Evento que ocorre no duploclique de um elemento

Eventos de Atualização:
  1. change
      - Evento que ocorre ao alterar o valor de um campo (input)
  2. load
      - Evento que ocorre durante ou ao término de carregamento de uma área da página

## Acionamento de Eventos

### Método ```.addEventListener```

Existe um método dos elementos HTML no JavaScript que se chama ```.addEventListener()```.
Este método adiciona ao elemento um escutador de um determinado evento.
Como parâmetro para esse método, você deve adicionar o nome do evento e a função que deve ser acionado quando o evento for executado naquele elemento:

```
  const botao = document.getElementById('meuBotao')

  botao.addEventListener('click', outraFuncao)
```

No exemplo acima, armazenamos na variável botao um elemento HTML com id "meuBotao", e então, a este elemento adicionamos um escutado de cliques que quando houver um click vai acionar a função ```outraFuncao```.

### Atributo HTML ```onclick```

É possível também adicionar um evento de click a um elemento através de um atributo HTML chamado ```onclick```.
Como valor desse atributo deve ser passada a invocação da função, ou seja, o nome da função seguido de parênteses:

```
  <html>
    <body>
      <h1 onclick='mudaTexto(this)' >Clique Aqui!</h1>

      <script>
        function mudaTexto(id) {
          id.innerHTML = "Mudei!"
        }
      </script>
    </body>
  </html>
```

Podemos perceber no exemplo acima que no arquivo HTML temos um título h1 com o texto "Clique Aqui!". Ao clicar nesse texto, a função ```mudaTexto()``` é acionada, e ent'ao o texto do elemento é alterado para "Mudei!".

**OBS:** Perceba que o this foi utilizado como parâmetro para função, pois o contexto dele é o elemento HTML onde a função foi inserida.