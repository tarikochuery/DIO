# Protocolo de Comunicação HTTP

## Como funciona o Protocolo HTTP?

### Protocolo HTTP

**HyperText Transfer Protocol (HTTP)**
- Protocolo de Transferência de Hipertexto
- Definido pelos RFCs 1945 e 2116
- Protocolo de comunicação
  - Intermédio da comunicação entre as partes
- Browser → implementa o cliente HTTP
  - Cliente HTTP pode não utilizar um browser, mas é o que ocorre na maior parte dos casos.
- Servidor → host objetos web
  - Hospeda os objetos que o cliente solicita

---------

- Cliente → Mensagem Request HTTP
  - Faz uma requisição HTTP ao servidor
  - Requisição utilizando Objetos WEB

- Servidor → Mensagem Response HTTP
  - Traz uma resposta após uma requisição solicitada pelo cliente
  - Utiliza o Protocolo TCP/IP

- Arquitetura Client-Server
  - Define dois lados, e ambos lados são independentes
  - Cliente se preocupa apenas com as requisições a serem feitas
  - Servidor se preocupa apenas em responder a requisição vinda do lado do cliente
  - **Stateless:** Não há armazenamento de estado, ou seja, se o cliente solicitar requisições iguais, mais de uma vez, o servidor responde a todas elas, pois não há estado para verificações

-----------

## Mensagens HTTP

### Request

```
Get:/somedir/page.htmlHTTP/1.1
Host: www.someschool.edu
Connection: close
User-agent: Mozilla/5.0
Accept-language: fr
```

Acima está o exemplo de um tipo de mensagem de requisição.

Ainda será detalhada mais a frente no curso, entretanto, perceba que há uma série de informações porque o servidor é stateless, ou seja, ele não guarda nenhuma informação e precisa de todas elas para poder responder à requisição.

**Método GET:** Utilizado quando se quer receber informações pelo servidor.

**Método POST:** Utilizado para enviar um conteúdo ao servidor. É esperado que o servidor faça um tratamento do dado.
Para esse método, é necessário que seja enviado um corpo na mensagem com mais informações que são solicitadas pelo servidor.

### Response

```
HTTP/1.1 200 OK
Connection:close
Date:Tue,09Aug2011 15:44:04GMT
Server:Apache/2.2.3(CentOS)
Last-Modified:Tue,09Aug2011 15:11:03GMT
Content-Length:6821
Content-Type:text/html

(data, data, ...)
```

Acima há o exemplo de uma mensagem de Response retornada pelo lado do servidor.

É enviado uma mensagem de status, se houve sucesso, recusa, etc...
Envia todos os metadados, e também o recurso solicitado pelo lado do cliente.

----------------

## Formato de Dados

Existem alguns formatos padrão de como os dados devem ser trocados entre o cliente e o servidor.

**Formatos mais comuns:**
 - XML
 - JSON

Na estrutura da mensagem, há dois tipos principais de campos a serem preenchidos. Assim como no HTML, há o header e o body, onde o header armazena os metadados e o body armazena os dados em si.

No campo header, principalmente nas requisições, é onde será especificado qual o formato do documento que está sendo enviado, JSON, XML, etc...
Para isso se utiliza a propriedade ```Content-Type:```. Da mesma forma, deve ser especificado qual o formato que deseja-se receber, utilizando a propriedade ```Accept:```.

### XML

```
<?xml version="1.0" encoding="utf-8">

<authentication-context>
  <username>my_username</username>
  <password>my_password</password>
  <validation-factors>
    <validation-factor>
      <name>remote_address</name>
      <value>127.0.0.1</value>
    </validation-factor>
  </validation-factors>
</authentication-context>
```

A estrutura é bem parecida com o HTML, entretanto sua utilização já está caindo em desuso por conta do surgimento do JSON, que tem uma sintaxe muito mais simples.

### JSON

```
{
  "username" : "my_username",
  "password" : "my_password",
  "validation-factors": {
    "validationFactors" : [
      {
        "name" : "remote_adress",
        "value" : "127.0.0.1"
      }
    ]
  }
}
```

Perceba que o arquivo JSON tem a estrutura de um objeto no JavaScript, e por isso acaba até conversando muito bem com a linguagem.

-------------------------

## Particularidades do HTTP versão 1.1

O protocolo funciona através do TCP (Transmition Control Protocol)
O acordo feito entre o servidor e o cliente funciona em três vias:
 1. SYN (Cliente solicita a conexão com o Servidor)
 2. SYN ACK (Servidor confirma a solicitação de conexão do Cliente)
 3. ACK (Cliente confirma a conexão estabelecida com o Servidor)

A conexão pode ter uma entre duas das características abaixo:
 - Persistente: A conexão se mantem ativa após a requisição ser respondida.
 - Não-Persistente: A conexão se encerra assim que a requisição é respondida.

Antes da versão 1.1, o protocolo permitia apenas que fossem feitas uma única requisição por vez. Ou seja, apenas depois de receber a resposta à requisição é que o cliente poderia fazer outra requisição. Entretanto, esse método se tornou ineficiente com o aumento do tráfego de dados.

Vendo a ineficiência, os browsers, na versão 1.1, permitem que o cliente faça até 6 requisições por vez. Entretanto, se mais de 6 requisições forem feitas, retornamos ao problema anterior. Há o bloqueio das requisições até que se tenham menos de 6 pendentes.

