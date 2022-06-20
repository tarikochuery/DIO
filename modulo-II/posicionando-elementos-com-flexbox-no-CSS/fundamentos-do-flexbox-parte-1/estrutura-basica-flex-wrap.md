# Flex wrap

Propriedade que define a quebra de linha ou não dentro do container.

Por padrão, a quebra de linha não é feita dentro do container. Sem a quebra de linha, dependendo da quantidade de itens que existem dentro do Container, começa a ocorrer o vazemento desses itens, como vimos na aula prática do display flex.

Abaixo estão os possíveis valores para a propriedade flex-wrap:

 - nowrap(padrão): não permite a quebra de linha no container.
 - wrap: permite a quebra de linha. A partir do momento que um item não encaixa mais na mesma linha, então acontece a quebra de linha automática. Entretanto, quando isso ocorre, há um problema com o desalinhamento dos itens, pois na nova linha, se houver uma quantidade diferente da linha acima, o iten alinha com o primeiro item da linha de cima.
 - wrap-reverse: permite a quebra de linha, porém a linha inicial é aquela normalmente seria a última linha. Logo, a quebra de linha é jogada para cima.