# Imagens

O elemento img é responsável por adicionar uma imagem no documento HTML, é com esse elemento que você irá adicionar uma imagem ao seu site.
É importante lembrar que não existe tag de fechamento para este elemento, funciona como o elemento tag, que você deve apenas adicionar atributos.

## Atributos

A tag img tem apenas dois elementos próprios, sendo um deles obrigatórios e o outro altamente recomendado por questões de acessibilidade.

 - **src:** Este atributo é encarregado por mostrar aos documento qual o arquivo da imagem, então nele deve conter todo o caminho que este arquivo deve percorrer até chegar na imagem, ou o endereço URL da imagem (o mais recomendado é que a imagem esteja já baixada no diretório e não seja buscada em uma URL, para que o usuário não precise baixar a imagem sempre que abrir o seu site).
 - **alt:** Este atributo funciona como uma descrição para a imagem. Caso a imagem não seja carregada, este texto aparecerá no lugar. Em caso de pessoas cegas, o narrador produzirá um arquivo de áudio a partir do texti disponibilizado neste atributo e também será utilizado como metadado para os buscadores.

**Exemplo**

``` <img src='img/avatar.jpg' alt='Foto do Tarik Chuery'> ```