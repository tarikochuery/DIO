const referenceError = new ReferenceError('Parâmetros inválidos')

const typeError = new TypeError('Tipo de dado Inválido')


const rangeError = new RangeError('Tamanho do array incorreto')


const verifyLength = (array, length) => {
  if (!array || !length) throw referenceError

  if(typeof(array) !== 'object') throw typeError
  if(typeof(length) !== 'number') throw typeError

  if (array.length !== length) throw rangeError

  return array
}

const array1 = [1, 2, 3]
const array2 = [2, 4, 6, 8]
const array3 = []

try{
  console.log(verifyLength(array1, 9))
} catch(err) {
  if (err instanceof ReferenceError){
    console.log('Erro nos parâmetros da Função verifyLength')
  } else if (err instanceof TypeError){
    console.log('Erro nos tipos dos parâmetros enviados')
  } else if (err instanceof RangeError) {
    console.log('Tamanho do array diferente do valor passado')
  }
}