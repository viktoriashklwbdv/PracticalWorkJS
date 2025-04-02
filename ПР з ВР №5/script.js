const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const sortButton = document.getElementById('sortButton');
const itemList = document.getElementById('itemList');

const loadItems = () => {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  console.log('Список завантажено з localStorage:', items);
  items.forEach(addItemToDOM);
};

const saveItems = () => {
  const items = [...itemList.children].map(li => li.textContent);
  localStorage.setItem('items', JSON.stringify(items));
  console.log('Список збережено у localStorage:', items);
};

const addItemToDOM = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', () => {
    console.log('Елемент видалено:', li.textContent);
    li.remove();
    saveItems();
  });
  itemList.appendChild(li);
  console.log('Елемент додано до списку:', text);
};

addItemButton.addEventListener('click', () => {
  const text = itemInput.value.trim();
  if (text) {
    addItemToDOM(text);
    saveItems();
    itemInput.value = '';
  } else {
    console.log('Попередження: Порожній ввід!');
    alert('Введіть текст!');
  }
});

sortButton.addEventListener('click', () => {
  const items = [...itemList.children]
    .map(li => li.textContent)
    .sort();
  itemList.innerHTML = '';
  items.forEach(addItemToDOM);
  saveItems();
  console.log('Список відсортовано:', items);
});

loadItems();