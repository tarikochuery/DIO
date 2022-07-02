class contaBancaria{
  constructor(tipo, agencia, numero, saldo = 0) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = saldo
  }

  get saldo(){
    return this._saldo
  }

  set saldo(val){
    this._saldo = val 
  }

  sacar(val){
    if (this._saldo < val) {
      console.log(`Saldo insuficiente`)
      return
    }
    console.log(`Você sacou R$${val}`)
    this._saldo = this._saldo - val
    return
  }

  depositar(val){
    this._saldo = this._saldo + val
    console.log(`Você depositou R$${val}`)
  }
}

class contaCorrente extends contaBancaria{
  constructor(agencia, numero, saldo = 0, cartaoCredito = false){
    super('corrente', agencia, numero, saldo)
    this._cartaoCredito = cartaoCredito
  }

  get cartaoCredito(){
    return this._cartaoCredito
  }

  set cartaoCredito(val){
    this._cartaoCredito = val
  }
}

class contaPoupanca extends contaBancaria{
  constructor(agencia, numero, saldo = 0){
    super('Poupança', agencia, numero, saldo)
  }
}

class contaUniversitaria extends contaBancaria{
  constructor(agencia, numero, saldo = 0){
    super('Universitária', agencia, numero, saldo)
  }

  sacar(val){
    if (val > 500){
      console.log('Você só pode sacar até R$500.00')
      return
    }
    super.sacar()
  }
}