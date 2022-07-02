# Assincronicidade

## Objetivos

 1. Explicar o que são Promises
 2. Ensinar como manipulá-las
 3. Apresentar as plavras-chave ```async``` e ```await```

## Definição

**Assíncrono**
  - Que não ocorre ou não se efetiva ao mesmo tempo

O JavaScript, por padrão, roda de maneira **SÍNCRONA**, logo, para que uma tarefa seja realizada, outra deve ser finalizada.

Já quando o JavaScript aciona seu modo assíncrono, uma teraf pode ser executada enquanto outra ainda não foi finalizada.

## Promises

Objeto de Promessa Assíncrono.

Inicialmente seu valor é desconhecido. A promessa pode ser, após o final da execução, resolvida ou rejeitada.

Por exemplo, suponha que você deseja ir ao cinema, e previamente você compra um ingresso para uma sessão daqui uma semana. Este ingresso é a sua promessa de que vai assistir ao filme, porém, só será resolvida se de fato daqui uma semana isso ocorrer.
Entretanto, imprevistos pordem acontecer, e no final você pode não conseguir comparecer à sessão no dia e horário marcados, e então sua promessa é rejeitada.

Uma Promise pode ter 3 estados:
 1. ```pending```
 2. ```fulfield```
 3. ```rejected```

### Estrutura

```
  const myPromisse = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(console.log('Resolvida!'))
    }, 2000)
  })
```

A estrutura acima mostra uma promessa de que haverá um log depois de 2 segundos dizendo "Resolvida"

### Manipulação

```
  await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message))
```

No código acima, temos uma manipulação da promessa com os métodos ```.then()``` e ```.catch()```.
O ```.then()``` recebe como parâmetro um callback que deve ser passado com o resultado da promessa, e indica o que deve ser feito com esse resultado da promessa. Só é ativado se a promessa for resolvida.
Já o ```.catch()``` é responsável por tratar o erro de uma função rejeitada.

## Async/Await

Quando trabalhamos com promisses dentro de uma função, precisamos que esta função seja assíncrona, assim o JavaScript vai entender que precisa esperar pelo resultado/erro dessa função, e então utilizá-lo.
Para tornar uma função assíncrona, utilizamos a palavra ```async```.

```
  async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
      window.setTimeout(() => {
        console.log('Resolvida!')
      }, 3000)
    })

    const resolved = await resolvePromise()
          .then((result) => result + ' passando pelo the')
          .then((result) => result + ' e agora acabou!')
          .catch((err) => console.log(err.message))

    return resolved
  }
```

Perceba que nessa estrutura utilizamos o valor ```await```. Essa palavra é utilizada para que o JavaScript possa entender que nesse trecho do código está ocorrendo uma ação assíncrona, logo o JavaScript podoe focar no restante do script enquanto esta promise não é resolvida.
Caso o await não seja utilizado, o retorno será uma promise com o status de pending, pois você não solicitou que o JavaScript esperasse que esse status mudasse.

### Try... Catch...

Você pode alterar o encadeamento de processos, e em vez de utilizar o método ```.catch```, é possível utilizar a estrutura do try...catch...
Veja o exemplo:

```
  async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
      window.setTimeout(() => {
        console.log('Resolvida!')
      }, 3000)
    })

  let result

  try{
    result = await resolvePromise()
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
  } catch(err){
    result = err.message
  }

  return result
}
```