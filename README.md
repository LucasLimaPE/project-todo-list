<h1 align="center">Project To Do List</h1>

## :memo: Descrição
Este projeto foi criado com o propósito de testar e exercitar as habilidades desenvolvidas no Módulo de Fundamentos do curso de Desenvolimento Web Full Stack na Trybe.

O projeto consiste em implementar uma página web onde é possível criar uma lista de tarefas, alterar, marcar, mover e apagar seus itens, utilizando JavaScript, HTML e CSS.

## :books: Requisitos 
1. Adicionar à lista o título "Minha Lista de Tarefas" em uma tag `header`.

2. Adicionar abaixo do título um parágrafo com o `id` `funcionamento` com o texto `Clique duas vezes em um item para marcá-lo como completo`.

3. Adicionar um input com o `id` `texto-tarefa` onde a pessoa usuária poderá digitar o nome do item para adicionar à lista.

4. Adicionar uma lista ordenada de tarefas com o `id` `lista-tarefas`.

5. Adicionar um botão com o `id` `criar-tarefa`, ao clicar nesse botão, um novo item deverá ser adicionado ao final da lista e o texto do input deve ser limpo.

6. Ordene os itens da lista de tarefas por ordem de criação.

7. Clicar em um item da lista deve alterar a cor de fundo do item para cinza.
  - Ao carregar a página os itens da lista não devem ter o estido CSS `background-color: gray`;
  - Ao clicar em um item da lista, ele passa a ter o estilo CSS `background-color: gray`.

8. Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.

9. Clicar duas vezes em um item faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.

10. Adicionar um botão com o `id` `apaga-tudo`  que quando clicado deve apagar todos os itens da lista.

11. Adicionar um botão com o `id` `remover-finalizados` que quando clicado remove somente os elementos marcados como finalizados na lista.

### Requisitos bônus

12. Adicionar um botão com o `id` `salvar-tarefas` que salve o conteúdo da lista. Se a página for fechada ou recarregada, a lista deve continuar no estado em que estava.
  - Os itens marcados como finalizados devem continuar com o seu conteúdo riscado.

13. Adicionar dois botões, um com o `id` `mover-cima` e outro com o `id` `mover-baixo`, que permitam mover o item selecionado para cima e para baixo na lista.
  - Não deve ser possível mover o primeiro item da lista para cima;
  - Não deve ser possível mover o último item da lista para baixo.

14. Adicionar um botão com `id` `remover-selecionado` que, quando clicado, remove o item selecionado.

## :wrench: Tecnologias utilizadas
* JavaScript;
* HTML5;
* CSS3.

## :computer: Arquivos modificados/criados
* script.js
* index.html
* style.css

## :rocket: Rodando o projeto localmente
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)

1. Clone esse repositório para sua máquina com o seguinte comando no terminal:

```bash
 git clone git@github.com:LucasLimaPE/project-todo-list.git
```

2. Via interface gráfica, vá até a pasta 'project-todo-list' criada. Entre nela.

3. Dê um duplo clique no arquivo index.html

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/dev-lucas-lima-pe/">
        <img src="https://avatars.githubusercontent.com/u/94488633?s=400&u=c0fc6e9a64565b85fc249c1b7a302c7b674ff785&v=4" width="100px;" alt="Foto de Lucas Lima no GitHub"/><br>
        <sub>
          <b>LucasLimaPE</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto

Foram desenvolvidos 100% dos requisitos do projeto, incluindo requisitos bônus.