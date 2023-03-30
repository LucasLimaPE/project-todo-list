const pegaBotao = document.querySelector('#criar-tarefa');
const pegaInput = document.querySelector('#texto-tarefa');
const pegaLista = document.querySelector('#lista-tarefas');
const pegaBotaoApagaTudo = document.querySelector('#apaga-tudo');
const pegaBotaoApagaFinalizados = document.querySelector('#remover-finalizados');
const saveListButton = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const deleteItemButton = document.getElementById('remover-selecionado');

function mudaBackgroundLi(event) {
  const item = event.target;
  const selecionaLi = document.querySelectorAll('li');
  for (let index = 0; index < selecionaLi.length; index += 1) {
    selecionaLi[index].classList.remove('selected');
    selecionaLi[index].style.backgroundColor = 'rgb(27 , 38 , 59)';
  }
  item.classList.add('selected');
  item.style.backgroundColor = 'rgb(128, 128, 128)';
}

function riscaELimpa(event) {
  const item = event.target;
  const className = 'completed';
  if (item.classList.contains(className)) {
    event.target.classList.remove('completed');
  } else {
    item.classList.add(className);
  }
}

const setNotStringITem = (keyName, item) => {
  const itemToString = JSON.stringify(item);
  return localStorage.setItem(keyName, itemToString);
};

const getNotStringItem = (keyName) => JSON.parse(localStorage.getItem(keyName));

const getMarkedItemsIndexes = (liElements) => Array.from(liElements)
  .reduce((markedItens, li, index) => {
    if (li.classList.contains('completed')) {
      markedItens.push(index);
    }
    return markedItens;
  }, []);

const getLiElementsTexts = (liElements) => Array.from(liElements).map((li) => li.innerText);

const saveList = () => {
  const liElements = document.querySelectorAll('li');
  const itemsToSave = getLiElementsTexts(liElements);
  const markedItemsIndexes = getMarkedItemsIndexes(liElements);

  setNotStringITem('myList', itemsToSave);
  setNotStringITem('marked', markedItemsIndexes);
};

function createLiElement(text, marked) {
  const li = document.createElement('li');
  li.innerText = text;
  if (marked) {
    li.classList.add('completed');
  }
  li.addEventListener('click', mudaBackgroundLi);
  li.addEventListener('dblclick', riscaELimpa);
  return li;
}

const takeAndDisplayList = () => {
  const listToDisplay = getNotStringItem('myList');
  const markedItens = getNotStringItem('marked');
  if (listToDisplay !== null) {
    listToDisplay.forEach((element, index) => {
      const list = document.getElementById('lista-tarefas');
      const marked = markedItens.includes(index);
      const li = createLiElement(element, marked);
      list.appendChild(li);
    });
  }
};

function adicionaTarefa(event) {
  event.preventDefault();
  if (pegaInput.value === '') {
    return window
      .alert('Para criar uma tarefa deve-se preencher o campo.');
  }
  const li = document.createElement('li');
  li.innerText = pegaInput.value;
  pegaLista.appendChild(li);
  pegaInput.value = '';
  li.addEventListener('click', mudaBackgroundLi);
  li.addEventListener('dblclick', riscaELimpa);
}

function apagaTudo(event) {
  event.preventDefault();
  const selecionaLi3 = document.querySelectorAll('li');
  for (let index = 0; index < selecionaLi3.length; index += 1) {
    selecionaLi3[index].remove();
  }
}

function apagaFinalizados(event) {
  event.preventDefault();
  const selecionaFinalizados = document.querySelectorAll('.completed');
  for (let index = 0; index < selecionaFinalizados.length; index += 1) {
    selecionaFinalizados[index].remove();
  }
}

const moveUp = () => {
  const selectedItem = Array.from(document.querySelectorAll('.selected'));
  const takeListItens = Array.from(document.querySelectorAll('li'));
  const indexOfItem = takeListItens.indexOf(selectedItem[0]);
  if (indexOfItem > 0 && selectedItem.length) {
    const previusItem = takeListItens[indexOfItem - 1];
    [takeListItens[indexOfItem - 1], takeListItens[indexOfItem]] = [selectedItem[0], previusItem];
    for (let index = 0; index < takeListItens.length; index += 1) {
      pegaLista.appendChild(takeListItens[index]);
    }
  }
};

const moveDown = () => {
  const selectedItem = Array.from(document.querySelectorAll('.selected'));
  const takeListItens = Array.from(document.querySelectorAll('li'));
  const indexOfItem = takeListItens.indexOf(selectedItem[0]);
  if (selectedItem.length > 0 && takeListItens.length - indexOfItem > 1) {
    const nextItem = takeListItens[indexOfItem + 1];
    [takeListItens[indexOfItem + 1], takeListItens[indexOfItem]] = [selectedItem[0], nextItem];
    takeListItens[indexOfItem] = nextItem;
    for (let index = 0; index < takeListItens.length; index += 1) {
      pegaLista.appendChild(takeListItens[index]);
    }
  }
};

const deleteItem = () => {
  const selectedItem = Array.from(document.querySelectorAll('.selected'));
  const takeListItens = Array.from(document.querySelectorAll('li'));
  if (selectedItem.length > 0) {
    const filteredItens = takeListItens.filter((item) => item !== selectedItem[0]);
    pegaLista.innerText = '';
    for (let index = 0; index < filteredItens.length; index += 1) {
      pegaLista.appendChild(filteredItens[index]);
    }
  }
};

pegaBotaoApagaFinalizados.addEventListener('click', apagaFinalizados);
pegaBotao.addEventListener('click', adicionaTarefa);
pegaBotaoApagaTudo.addEventListener('click', apagaTudo);
saveListButton.addEventListener('click', saveList);
moveUpButton.addEventListener('click', moveUp);
moveDownButton.addEventListener('click', moveDown);
deleteItemButton.addEventListener('click', deleteItem);

window.onload = () => {
  takeAndDisplayList();
};
