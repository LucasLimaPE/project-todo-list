const pegaBotao = document.querySelector('#criar-tarefa');
const pegaInput = document.querySelector('#texto-tarefa');
const pegaLista = document.querySelector('#lista-tarefas');

function adicionaTarefa() {
  const li = document.createElement('li');
  li.innerText = pegaInput.value;
  pegaLista.appendChild(li);
  pegaInput.value = '';
  li.addEventListener('click', mudaBackgroundLi);
  li.style.backgroundColor = 'white';
  //li.classList.add('selected');
  }
  function mudaBackgroundLi(event){
    const selecionaLi = document.querySelectorAll('li');
    for (let index = 0; index < selecionaLi.length; index += 1) {
      selecionaLi[index].classList.remove('selected');
      selecionaLi[index].style.backgroundColor = 'white';
    }
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
pegaBotao.addEventListener('click', adicionaTarefa);
// pegaBotao.addEventListener('click', function () {
//   const li = document.createElement('li');
//   pegaLista.appendChild(li);
//   li.innerText = pegaInput;
// });
