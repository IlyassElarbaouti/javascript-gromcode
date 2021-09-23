import { renderTasks } from './render.js';
import { initHandlers } from './initHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initHandlers();
});

const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);