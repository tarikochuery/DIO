# Condicionais a partir de Parâmetros

É possível estabelecer alguma condicional a partir da interface dos parâmetros passados para uma função:

```
interface IUsuario {
  id: number
  nome: string
  email: string
}

interface IAdmin extends IUsuario {
  cargo: 'gerente' | 'coordenador' | 'supervisor'
}

function redirecionar(usuario: IUsuario | IAdmin): void{
  if('cargo' in usuario){
    // redirecionar para a área de administração
    return
  }

  // redirecionar para a área do usuário
}
```

Perceba que na parte condicional foi utlizada a palavra reservada ```in```.
Uma outra coisa legal, é que a partir do escopo dentro da condicional, o VSCode vai te sugerir as propriedades do usuário ```IAdmin```, porém, fora desse escopo, apenas te sugere as propriedades do ```IUsuario```.