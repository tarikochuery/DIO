# Mensagens HTTP → Request & Response

## Request

**Estrutura:**
```
Get: /somedir/page.html HTTP/1.1
Host: www.someschool.edu
Connection: close
User-agent: Mozilla/5.0
Accept-language: fr
```

A primeira linha da estrutura é chamada de **Request Line**, que mostra o método, o endereço e a versão do protocolo utilizada.

O restante da estrutura é a **Header Line**, onde estão presentes os metadados necessários para o servidor entender qual a resposta esperada.

### Resquest Line

Na Request Line é colocado o método da requisição, e o endereço para o qual esta requisição foi enviada.
Ao final deve ser informado qual a versão do protocolo será utilizada para a comunicação entre as partes.

### Header Line

 - O Host presente no Header Line indica o endereço do cliente, que é para onde o server deve mandar a resposta.
 - A connection indica qual o tipo de conexão a ser estabelecida entre as partes, no tipo 'close', após a resposta ser recebida pelo cliente, a conexão é finalizada.
 - O User-agent é o agente responsável por fazer a requisição. Nesse caso é o browser Mozilla.
 - Accept-language indica qual a preferência do cliente com relação à linguagem adotada. No exemplo acima temos o idioma francês como preferência.

### Métodos

| Método | Descrição Breve |
|--------|-----------------|
| GET | Solicita um recurso do servidor |
| HEAD | GET, porém sem corpo de resposta |
| POST | Submete uma entidade a um recurso |
| PUT | Substituição de recurso pelos dados da requisição |
| DELETE | Remoção de um recurso |
| TRACE | Chamada de loop-back a um determinado recurso |
| OPTION | Opções de comunicação com recurso |
| CONNECT | Tunelamento identificado pelo recurso |
| PATCH | Modificação parcial |


### Métodos Mais Utilizados

Os métodos mais utilizados para a request são GET e POST, e dentre os dois, 90% dos casos são requisições do tipo GET.

