const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const generateId = () => Math.random().toFixed(3)*1000;
const createBtn = document.querySelector(".create-task-btn");
const input = document.querySelector(".task-input");

function onAddTask() {
  listElem.innerHTML = "";
  const inputValue = input.value;
  if (inputValue !== "") {
    tasks.push({ text: inputValue, done: false, id: generateId() }); 
  }
  input.value = "";
  renderTasks(tasks);
}
createBtn.addEventListener("click", onAddTask);

function onClickCheckbox(event) {
  const elemId = event.target.dataset.id;
  if (tasks.find((task) => Number(task.id) === Number(elemId)).done) {
    tasks.find((task) => Number(task.id) === Number(elemId)).done = false;
  } 
  else {
    tasks.find((task) => Number(task.id) === Number(elemId)).done = true;
  }
  listElem.innerHTML = "";
  renderTasks(tasks);
  return null;
}
listElem.addEventListener("click", onClickCheckbox);