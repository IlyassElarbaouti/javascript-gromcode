import { renderTasks } from './list/render.js';
import { initHandlers } from './list/initHandlers.js';
import './index.css'

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