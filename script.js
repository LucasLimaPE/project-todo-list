const pegaBotao = document.querySelector('#criar-tarefa');
const pegaInput = document.querySelector('#texto-tarefa');
const pegaLista = document.querySelector('#lista-tarefas');
const pegaBotaoApagaTudo = document.querySelector('#apaga-tudo');
const pegaBotaoApagaFinalizados = document.querySelector('#remover-finalizados');

function mudaBackgroundLi(event) {
  const selecionaLi = document.querySelectorAll('li');
  for (let index = 0; index < selecionaLi.length; index += 1) {
    selecionaLi[index].classList.remove('selected');
    selecionaLi[index].style.backgroundColor = 'white';
  }
  event.target.classList.add('selected');
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// function tiraRiscoLi(event) {
//   if (event.target.style.textDecoration === 'line-through solid rgb(0, 0, 0)') {
//     event.target.classList.remove('completed');
//     event.target.style.textDecoration = 'none';
//   } else {
//     event.target.classList.add('completed');
//     event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
//   }
//}

// const addEvent = (array, func, type) => {
//   if (array.length > 0) {
//     for (let index = 0; index < array.length; index += 1) {
//       array[index].addEventListener(type, func);
//     }
//   }
// }

function riscaELimpa(event) {
  const item = event.target;
  const className = 'completed';
  if (item.classList.contains(className)) {
    event.target.classList.remove('completed');
  } else {
    item.classList.add(className);
  }
}

function adicionaTarefa(event) {
  event.preventDefault();
  const li = document.createElement('li');
  li.innerText = pegaInput.value;
  pegaLista.appendChild(li);
  pegaInput.value = '';
  li.addEventListener('click', mudaBackgroundLi);
  li.addEventListener('dblclick', riscaELimpa);
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
