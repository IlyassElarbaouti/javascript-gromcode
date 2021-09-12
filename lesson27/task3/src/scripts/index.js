import { initTodoListHandlers } from "./todoList.js";
// eslint-disable-next-line import/no-unresolved
import { renderTasks } from "./render.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandlers();
});

// eslint-disable-next-line consistent-return
const onStorageChange = (e) => {
  if (e.key !== "tasksList") {
    return null;
  }
  renderTasks();
};

window.addEventListener("storage", onStorageChange);