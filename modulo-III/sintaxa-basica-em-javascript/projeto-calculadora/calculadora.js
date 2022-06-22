var calculadora = () => {
  const OPERACAO = Number(prompt('escolha uma operação:\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão Real\n 5 - Módulo\n 6 - Potenciação'))

  if (!OPERACAO || OPERACAO > 6){
    alert('Insira um valor válido')
    calculadora()
  }

  let numero1 = Number(prompt('Insira o primeiro valor:'))
  let numero2 = Number(prompt('Insira o segundo valor:'))

  let soma = (n1, n2) => {
    alert(n1 + n2)
  }

  let subtracao = (n1, n2) => {
    alert(n1 - n2)
  }

  let multiplicacao = (n1, n2) => {
    alert(n1 * n2)
  }

  let divisaoReal = (n1, n2) => {
    alert(n1 / n2)
  }

  let modulo = (n1, n2) => {
    alert(n1 % n2)
  }

  let potenciacao = (n1, n2) => {
    alert(n1 ** n2)
  }

  let novaOperacao = () => {
    let opcao = Number(prompt('Deseja fazer uma nova operação?\n1 - Sim\n2 - Não'))

    if (opcao === 1){
      calculadora()
    } else if (opcao === 2) {
      alert('Até mais!')
    } else {
      alert('Escreva uma opção válida')
      novaOperacao()
    }
  }

  switch (OPERACAO) {
    case 1:
      soma(numero1, numero2)
      break
    case 2:
      subtracao(numero1, numero2)
      break
    case 3:
      multiplicacao(numero1, numero2)
      break
    case 4:
      divisaoReal(numero1, numero2)
      break
    case 5:
      modulo(numero1, numero2)
      break
    case 6:
      potenciacao(numero1, numero2)
      break
    default:
      alert('Insira uma opção válida')
      calculadora()
      break
  }

  novaOperacao()
}

calculadora()