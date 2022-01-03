/*
 */

// Algoritmo:
// 1 - Declara-se variávels responsáveis por selecionar elementos (linhas 7 a 11);
// 2 - Declara-se uma função (adicionaTarefa), que ao ser chamada irá:
// 2.1 - Declarar uma constante que irá criar um elemento ('li');
// 2.2 - Adicionar o valor do texto do input como texto do elemento criado anteriormente.
// 2.3 - Limpar o valor do input;
// 2.4 - Adicionar um escutador de tarefas ao elemento criado, que funcionará por click e irá chamar a função (mudaBackgroundLi);
// 2.5 - Definir o backgroundColor do elemento criado;
// 2.6 - Adicionar outro escutador de eventos ao elemento criado, acionado por duplo clique que irá chamar a funç~ao (riscaLi);
// 3 - Declara-se a função (mudaBackgroundLi) adicionando como parâmetro (event) que irá:
// 3.1 - Declarar uma constante que irá selecionar os elemento ('li');
// 3.2 - Declarar um for que irá percorres os elementos ('li'), dentro do for:
// 3.2.1 - Irá selecionar o elemento percorrido e irá remover a classe ('selected');
// 3.2.2 - Irá selecionar o elemento percorrido e irá definir seu backgroundColor, fecha-se o for;
// 3.3 - Ainda dentro da função, após o for, define-se que (event.target), onde evento foi chamado, será adicionado a classe ('selected) e será definido um backgroundColor;
// 4 - Declara-se uma função (riscaLi) que irá:
// 4.1 - Declarar uma constante (selecionaLi2) que irá selecionar os elementos ('li');
// 4.2 - Definir (event.target) que irá selecionar o elemento onde o evento foi disparado adicionando um textDecoration a ele (riscar a linha);
// 4.3 - Adicionar ao elemento que disparou a função a classe ('completed')
// 4.4 - Declara um for que irá percorrer os elementos ('li') e:
// 4.4.1 - Irá adicionar aos elementos criados um escutador de eventos, acionado por duplo clique que chamará a função (tiraRiscoLi);
// 5 -  Declara-se a função (tiraRiscoLi) que:
// 5.1 - Declara uma estrutura condicional que:
// 5.1.2 - Irá comparar se o elemento em que foi desparado o evento (event.target) tem um determinado stylo de decoração de texto, se sim, o elemento que disparou o evento terá a classe ('.completed') removida, e terá o stylo de decoração de texto declarado como none (nenhum), se não, irá adicionar a classe ('completed') e irá definir o stylo de decoração de texto determinado;
// 6 - Declara uma função apaga tudo que:
// 6.1 -Irá declarar uma constante que selecionará todos os elementos ('li') e será declarado um for para percorrer todos os elementos ('li') removendo-os;
// 7 - Declara-se uma função (ApagaFinalizados) que irá declar uma constante (selecionaFinalizado) que selecionará todos os elementos que contêm a classe ('completed');
// 7.1 - Após a delcaração da constante irá declarar um for que irá percorrer todos os elementos selecionados na constante removendo-os;
// 8 - Adiciona ao botão um escutador de eventos que acionará por clique e chamará a função (apagaFinalizados);
// 9 - Adiciona ao botão do input um escutador de tarefas que irá funcionar por clique e chamará a função (adicionaTarefa);
// 10 - Adiciona ao botão (Apaga Tudo) um escutador de tarefas acionado por click que chamará a função (apataTudo);

const pegaBotao = document.querySelector('#criar-tarefa');
const pegaInput = document.querySelector('#texto-tarefa');
const pegaLista = document.querySelector('#lista-tarefas');
const pegaBotaoApagaTudo = document.querySelector('#apaga-tudo');
const pegaBotaoApagaFinalizados = document.querySelector('#remover-finalizados');


function adicionaTarefa() {
  const li = document.createElement('li');
  li.innerText = pegaInput.value;
  pegaLista.appendChild(li);
  pegaInput.value = '';
  li.addEventListener('click', mudaBackgroundLi);
  li.style.backgroundColor = 'white';
  li.addEventListener('dblclick', riscaLi);
}

function mudaBackgroundLi(event) {
  const selecionaLi = document.querySelectorAll('li');
  for (let index = 0; index < selecionaLi.length; index += 1) {
    selecionaLi[index].classList.remove('selected');
    selecionaLi[index].style.backgroundColor = 'white';
  }
  event.target.classList.add('selected');
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function riscaLi(event) {
  const selecionaLi2 = document.querySelectorAll('li');
  event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  event.target.classList.add('completed');
  for (let index = 0; index < selecionaLi2.length; index += 1) {
    selecionaLi2[index].addEventListener('dblclick', tiraRiscoLi);
  }
}

function tiraRiscoLi(event) {
  if (event.target.style.textDecoration === 'line-through solid rgb(0, 0, 0)') {
    event.target.classList.remove('completed');
    event.target.style.textDecoration = 'none';
  } else {
    event.target.classList.add('completed');
    event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
}

function apagaTudo() {
  const selecionaLi3 = document.querySelectorAll('li');
  for (let index = 0; index < selecionaLi3.length; index += 1) {
    selecionaLi3[index].remove();
  }
}

function apagaFinalizados() {
  const selecionaFinalizados = document.querySelectorAll('.completed');
  for (let index = 0; index < selecionaFinalizados.length; index += 1) {
    selecionaFinalizados[index].remove();
  }
}

pegaBotaoApagaFinalizados.addEventListener('click', apagaFinalizados);
pegaBotao.addEventListener('click', adicionaTarefa);
pegaBotaoApagaTudo.addEventListener('click', apagaTudo);
