var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var incrementButton = document.getElementsByName('adicionar')[0]
var decrementButton = document.getElementsByName('subtrair')[0]

incrementButton.addEventListener('click', increment)
decrementButton.addEventListener('click', decrement)

function increment () {
  currentNumber++
  currentNumberWrapper.innerHTML = currentNumber

  // Caso queira que o botão incrementar desabilite quando contador chegar a 10
  /*if (currentNumber >= 10){
    return
  }
  else{
    currentNumber++
    currentNumberWrapper.innerHTML = currentNumber
  }*/

  // O número fica preto quando maior ou igual a 0
  /*if (currentNumber >= 0){
    currentNumberWrapper.style.color = 'black'
  }*/
}

function decrement () {
  currentNumber--
  currentNumberWrapper.innerHTML = currentNumber

  
  // Caso queira que o botão decrementar desabilite quando o contador chegar a 0
  /*if (currentNumber <= 0){
    return
  }
  else{
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber
  }*/
  
  // Quando o contador ficar abaixo de 0, o número fica vermelho
  /*if (currentNumber < 0){
    currentNumberWrapper.style.color = 'red'
  }*/
}