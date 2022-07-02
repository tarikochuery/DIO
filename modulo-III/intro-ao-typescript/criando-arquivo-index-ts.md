# Index.ts

Para iniciar o TypeScript, é necessário algumas dependências instaladas para que dessa forma, possa haver a transcrição do TS para o JavaScript.

## Configurações Básicas

Para iniciar, você precisará do node.Js instalado na sua máquina.

Então crie um diretório, e no seu terminal, dentro do diretório utilize o comando:

```
npm init
```

Então será solicitado que alguns campos sejam preenchidos, porém isso não vai interferir no seu projeto se ficarem em branco.

Isso feito, é necessário instalar o parcel-bundler para auxiliar na compilação do TS. Para isso, utilize o seguinte comando:

```
npm i parcel-bundler
```

Após o bundler instalado, um diretório chamado ```node-modules``` será adicionado ao seu diretório e também um arquivo JSON chamado ```package-lock.json``` onde estar'ao as dependências necessárias e as configurações básicas do projeto.

## Criando o index.ts

Isso feito, você já pode criar seu arquivo HTML onde será feita a importação do arquivo index.ts

**OBS:** A extensão do arquivo TypeScript é .ts

E então, crie um arquivo TypeScript e para testar se as configurações estão funcionando, escreva no arquivo ts:

```
console.log('TypeScript')
```

## Script de Inicialização

Com isso feito, no seu arquivo ```package.json```, você vai adicionar um script. Procure a chave ```"scripts"```(Ela tem a estrutura de um objeto).
Nesse objeto, adicione a chave com o valor abaixo:

```
"start": "parcel index.html"
```

Isso é a criação de um script que você utilizará no terminal para iniciar a sua aplicação.

Uma vez isso feito, digite no terminal o seguinte comando:

```
npm start
```

E então, na primeira vez que rodar este comando, o typescript será adicionado ao node-modules, então pode demorar um pouco para construir a página. E então aplicação irá rodar, provavelmente, na porta ```localhost:1234```.

Quando o comando é rodade pela primeira vez, será adicionado o TypeScript também ao ```"devDependencies"```, no ```package.json```, a última versão do TypeScript.

Para verificar se tudo está funcionando como deveria, abra o console no navegador, e a mensagem "TypeScript" deve estar aparecendo.

## Arquivo ```tsconfig.json```

É importante que após dado o start no projeto, para que os erros propostos pelo Ts aconteçam no momento do desenvolvimento, é necessário que os filtros do Ts estejam funcionando.
Para isso, é necessário criar o arquivo ```tsconfig.json``` com o comando abaixo no terminal:

```
tsc --init
```

## Arquivo ```.gitignore```

Quando subir seu projeto para o GitHub é importante que seja adicionado ao repositório o arquivo ```.gitignore```, e nele sejam adicionados os seguintes diretórios:
 - node_modules
 - dist
 - .cache

Esses diretórios, quando adicionados serão ignorados pelo git. São diretórios com muitos arquivos e que não têm a necessidade de aparecer no seu projeto.

-------------------
**OBSERVAÇÃO:** Como muitas dependências são instaladas, o material construído com TypeScript para esse curso estará no repositório abaixo:

[Repositório Projetos TypeScript](https://github.com/tarikochuery/DIO-TypeScript)