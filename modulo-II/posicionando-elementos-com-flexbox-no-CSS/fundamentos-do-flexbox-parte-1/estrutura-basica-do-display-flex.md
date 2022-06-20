# Fundamentos

Como vimos na aula anterior, podemos dividir os conceitos do Flexbox em duas grandes entidades:

1. Flex Container
2. Flex Item

Nesta primeira parte do curso iremos focar apenas nas propriedades relacionadas ao Flex Container até estarmos proficientes e então seguiremos com as propriedades do Flex Item.

## Display Flex

Ao utilizar a propriedade display com valor flex, tornamos um elemento pai em um Flex Container.

**Exemplo:**

HTML

```
  <section>
    <h2>Meu título da seção</h2>
    <p>Meu parágrafo da seção</p>
    <a>Meu link da seção</a>
  </section>
```

CSS

```
  section {
    display: flex;
  }
```

No exemplo acima, tornamos o elemento com a tag section um Flex Container e todos os elementos diretamente dentro dele em Flex Items

**OBS:** Qualquer tipo de elemento pode se tornar um um flex container, embora o mais indicado é utilizar o flex container para tags que sejam entendidas como blocos.