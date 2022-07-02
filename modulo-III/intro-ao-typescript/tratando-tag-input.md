# Tratando tag input

No universo de programção web, a tipagem dos elementos HTML funcionam de uma maneira um pouco diferente.
Suponha que no seu arquivo HTML tenha uma input com o id 'input'.

```
<input id="input" type="text" />
```

Suponha que você queira que tudo o que for digitado nesse input apareça no console do navegador:

```
const input = document.getElementById('input') as HTMLInputElement
```

Perceba que para selecionar o input, e reconhecê-lo como um, utilizamos a palavra reservada ```as```, e a interface do elemento.

Nesse caso, utilizamos dessa forma, pois não definimos a interface no nosso código.

Então, podemos construir a função para executar o que desejamos:

```
const input = document.getElementById('input') as HTMLInputElement\

input.addEventListener('input', (event) => {
  const eventInput = event.currentTarget as HTMLInputElement
  console.log(eventInput.value)
})
```

No código acima, utilizamos o event.currentTarget para selecionar novamente o Input.
Entretanto, é preciso avisar ao TS que essa constante é o input.
Então, fazemos o log com o valor escrito no Input.