# Ecossistema ReactJS

## Estado e Ciclo de Vida

Um conceito super importante do ReactJS é o Ciclo de Vida.

Há 4 momentos principais dos componentes no ReactJS

 - Inicialização
 - Montagem
 - Atualização
 - Desmontagem

--------

Nenhum componente, pai ou filho, deve saber se outro componente possui estado ou não.

O estado é apenas local ao componente, caso seja necessário enviar algum atributo para outro componente, então é feito via props.

---------

### Ciclo de Vida

![Ciclo de Vida React](imagens/codigos/lifecycle.png)

Na imagem acima podemos ter uma noção de como funciona o ciclo de vida dos componentes no React.

Na parte de inicialização, o componente Já prepara todas as props recebidas, e já prepara os estados armazenados.

Então, na montagem desse Componente, ele passa por 3 etapas. A primeira é logo antes de ele ser renderizado. Portanto, caso você deseje alterar algum estado ou alguma prop antes do componente aparecer na tela, isso é possível.

Então o componente é renderizado, e logo após ele ser renderizado, também é possível alterar algum estado ou alguma prop do seu componente e isso causará sua atualização.

Na sequeência, enquanto o componente estiver em tela, sempre que alguma prop ou algum estado for alterado, isso causará a atualização apenas do componente que sofreu alguma alteração. E antes de ocorrer a atualização e logo depois de ocorrer é possível fazer alterações também tanto no estado quanto na props.

E logo antes do componente ser desmontado, ou seja, sair da tela, também é possível fazer alguma alteração em seu estado, ou nas suas props.

---------

## Ecossistema

Há diversas ferramentas que casam muito bem com o desenvolvimento em React:

 - React Router → utilizado para a navegação entre páginas
 - Redux → utilizado para mudança de estados globais (hoje já sendo substituído por uma ferramenta própria do ReactJS)
 - Material UI → Pack de componentes básicos
 - Ant-Design → Pack de componentes básicos
 - Storybook
 - Gatsby
 - Jest → Testes
 - React i18n Next

A instalação dessas dependências funciona como a instalação do react-DOM e do react-scripts