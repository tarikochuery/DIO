function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa1 = {
  nome: "Jorge",
  idade: 15
}

const pessoa2 = {
  nome: "Bruna",
  idade: 25
}

const pessoa3 = {
  nome: "Silvia",
  idade: 64
}

console.log(calculaIdade.call(pessoa1, 10))
console.log(calculaIdade.apply(pessoa2, [5]))
console.log(calculaIdade.call(pessoa3, 23))