import { getItem, setItem } from './storage.js';
import { renderTasks } from './render.js';

const input = document.querySelector('.task-input');

export const inputEvent = () => {
  const tasksList = getItem('tasksList') || [];
  if (input.value !== '') {
    tasksList.push({
      text: input.value,
      done: false,
      id: Math.ceil(Math.random() * 100).toFixed(),
    });
  }
  setItem('tasksList', tasksList);
  renderTasks();
  input.value = '';
};


export const checkBoxChecked = event => {
  const tasksList = getItem('tasksList');
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const taskId = event.target.dataset.id;
  const tasksElem = tasksList.find(el => el.id === taskId);

  if (event.target.checked) {
    tasksElem.done = true;
  } else {
    tasksElem.done = false;
  }
  setItem('tasksList', tasksList);
  renderTasks();
};