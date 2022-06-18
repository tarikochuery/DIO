# Tags para Links

O elemento utilizado para links é o a, que vem de âncora.

O conteúdo do elemento é um texto qualquer, porém o seu atributo que indicará para onde o usuário deverá ser redirecionado.

**Exemplo**

``` <a href='linkedin.com/in/tarik-chuery'> LinkedIn </a> ```

Nesse caso, o atributo ```href='linkedin.com/in/tarik-chuery'``` indica o destino do redirecionamento do usuário, entretanto o link apenas dará a mensagem LinkedIn.
**OBS:** o href não direciona apenas para outras páginas web, mas também para endereços de email e para telefones, porém deve-se utilizar um determinado prefixo antes do email ou telefone:
  - _email:_ ```href='mailto:ttarikechuery@gmail.com'```
  - _tel:_ ```href='tel:(00)999999999'```

Outro atributo importante é o target, que indicará como o link deve ser aberto. Por padrão, o a rediriciona o usuário na mesma aba de navegação. Caso você queira que o usuário seja redirecionado em uma nova aba utilize a seguinte estrutura:

```<a target='_blank' href='linkedin.com/in/tarik-chuery'>LinkedIn</a>```