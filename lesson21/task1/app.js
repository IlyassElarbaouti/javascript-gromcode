'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
// sort arr
// create ul
// create li
// create checkbox
// append checkbox to li
// append text to li
// append li to ul

const renderTasks = (tasksList) => {
  console.log(`renderTasks is running`);

  const listElem = document.querySelector(".list");

  const listItemsElements = tasksList.map((item) => {
    const listItemElement = document.createElement("li");
    listItemElement.classList.add("list__item");

    const checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("list__item-checkbox");

    if (item.done) {
      checkbox.checked = "true";
      listItemElement.classList.toggle("list__item_done");
    }

    listItemElement.append(checkbox);
    listItemElement.append(`${item.text}`);

    return listItemElement;
  });

  listElem.append(...listItemsElements);
};
renderTasks(tasks);

document.querySelector(".create-task-btn").onclick = () => {
  const newValueText = document.querySelector(".task-input").value;
  tasks.push({ text: newValueText, done: false });
};