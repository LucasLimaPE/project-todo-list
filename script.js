const pegaBotao = document.querySelector('#criar-tarefa');
const pegaInput = document.querySelector('#texto-tarefa');
const pegaLista = document.querySelector('#lista-tarefas');

function adicionaTarefa() {
    console.log('ok');
  const li = document.createElement('li');
  li.innerText = pegaInput.value;
  pegaLista.appendChild(li);
  pegaInput.value = '';
}

pegaBotao.addEventListener('click', adicionaTarefa);

// pegaBotao.addEventListener('click', function () {
//   const li = document.createElement('li');
//   pegaLista.appendChild(li);
//   li.innerText = pegaInput;
// });
