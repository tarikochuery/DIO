# Justify Content

Essa propriedade tem como objetivo tratar do alinhamento dos itens dentro do Container. Além disso, também estiliza o espaçamento entre os itens dentro do container e suas bordas.

O alinhamento dos itens internos ocorre sempre em relação ao eixo principal determinado pelo flex-direction.

**OBS:** Caso os itens ocupem 100% do todo o container, ou seja, não deixam espaço sobrando, essa propriedade não se aplica.

Os possíveis valores para essa propriedade são:
 - flex-start
    - Leva todos itens até o começo do Container (este determinado pelo flex-direction), respeitando o conteúdo dentro de cada item.
 - flex-end
    - Leva todos os itens para o final do Container, respeitando o conteúdo dentro de cada item
 - center
    - Centraliza os itens no Container
 - space-between
    - Traz um espaçamento igual entre os itens, levando o primeiro item bem próximo à borda do início do Container e o último item bem próximo à borda do final do Container.
 - space-around
    - Mantem um espaçamento entre os itens que seja o dobro do espaçamento do primeiro e do último item às bordas do Container.