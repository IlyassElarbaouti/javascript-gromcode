import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./render.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key !== "tasksList") {
    return null;
  }
  renderTasks();
};

window.addEventListener("storage", onStorageChange);