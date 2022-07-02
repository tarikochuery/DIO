# Variáveis Opcionais

É possível que alguns dados da interface sejam opcionais, e então na hora de criar sua variável, é possível não adicionar o determinado dado:

```
inteface IUser {
  nome: string
  email: string
  cargo?: 'funcionario' | 'supervisor' | 'coordenador' | 'gerente'
}

function redireciona(usuario: IUser): void {
  if (usuario.cargo){
    //redireciona para a área de admin
    return
  }
  //redireciona para a área de usuário
  return
}
```

Perceba que ao lado da propriedade opcional é adicionado uma ponto de interrogação (?).

Então foi utilizada uma estrutura condicional, e apenas os usuários que contenham o dado "cargo" entram no escopo da condicional.