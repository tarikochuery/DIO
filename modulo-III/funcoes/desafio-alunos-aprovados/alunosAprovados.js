const alunosAprovados = (alunos, media = 5) => {
  let aprovados = []

  for (aluno of alunos){
    const {mediaFinal, nome} = aluno
  
    const estaAprovado = mediaFinal >= media
    
    if(estaAprovado){
      aprovados = [...aprovados, nome]
    }
  }

  return aprovados
}

let aluno1 = {
  nome: "João",
  mediaFinal: 8
}

let aluno2 = {
  nome: "Gabriel",
  mediaFinal: 5
}

let aluno3 = {
  nome: "Pedro",
  mediaFinal: 6
}

let alunos = [aluno1, aluno2, aluno3]

let aprovados = alunosAprovados(alunos)

console.log(aprovados)