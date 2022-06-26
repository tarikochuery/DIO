let isEven = (number) => {
  return number % 2 === 0
}

let substitute = (array) => {
  if (!array || array.length === 0) return -1

  for (index in array) {
    if (isEven(array[index])){
      array[index] = 0
    }
  }

  return array
}

console.log(substitute([]))
console.log(substitute([1,2,3,4,5,6]))
console.log(substitute([2,4,6,8,10]))
console.log(substitute(true))
