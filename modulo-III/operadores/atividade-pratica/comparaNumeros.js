function comparaNumeros(num1, num2) {
  let igualdade = num1 === num2 ? "são iguais" : "não são iguais"
  let soma = num1 + num2

  if (soma > 20){
    console.log(`Os números ${num1} e ${num2} ${igualdade}. Sua soma é maior que 10 e maior que 20`)
  } else if (soma < 10){
    console.log(`Os números ${num1} e ${num2} ${igualdade}. Sua soma é menor que 10 e menor que 20`)
  } else if (soma > 10 && soma < 20){
    console.log(`Os números ${num1} e ${num2} ${igualdade}. Sua soma é maior que 10 e menor que 20`)
  } else if (soma === 10 && soma < 20){
    console.log(`Os números ${num1} e ${num2} ${igualdade}. Sua soma é igual a 10 e menor que 20`)
  } else if (soma > 10 && soma === 20){
    console.log(`Os números ${num1} e ${num2} ${igualdade}. Sua soma é maior que 10 e igual a 20`)
  }
}

comparaNumeros(2,5)
comparaNumeros(6,6)
comparaNumeros(10,20)
comparaNumeros(10,10)
comparaNumeros(2,8)