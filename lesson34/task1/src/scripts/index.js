import { renderTasks } from './renderer.js';
import { onCreateTask, listElem } from './createTask.js';
import { updatedTasks } from './updateTask.js';
import { getItem, setItem } from './storage.js';
import { getTasksList } from './taskGateway.js';
import { onDeleteTask } from './deleteTask.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
});

const crtBtnElem = document.querySelector('.create-task-btn');

crtBtnElem.addEventListener('click', onCreateTask);
listElem.addEventListener('click', updatedTasks);
listElem.addEventListener('click', onDeleteTask);

const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
  setItem('tasksList', getItem('tasksList'));
};

window.addEventListener('storage', onStorageChange);