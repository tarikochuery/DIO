let palindromeVerify = (word) => {
  if (!word) return;

  while (word.includes(" ")){
    word = word.replace(" ","")
    console.log(word)
  }
  word = word.toLowerCase()
  word = word.split("")
  let isPalindrome = false

  do {
    let firstLetter = word[0]
    let lastLetter = word[word.length - 1]

    isPalindrome = firstLetter === lastLetter

    word.shift()
    word.pop()

  } while (isPalindrome && word.lenght > 0)

  return isPalindrome
}

console.log(palindromeVerify("Socorram me subi no onibus em Marrocos"))
console.log(palindromeVerify("abacaxi"))