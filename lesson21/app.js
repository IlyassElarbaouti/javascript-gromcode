'use strict';

const tasks = [
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

const renderTasks = tasksList => {
  // put your code here
  const list = document.querySelector('.list');
  tasksList.map(el=>{
  const listItem = document.createElement('li');
  listItem.classList.add('list__item');
  const checkbox = document.createElement('input');
  // checkbox
  checkbox.setAttribute('type','checkbox')
  listItem.append(checkbox);
  if(el.done){
      checkbox.checked=true;
  }
  // 
  listItem.append(el.text);
  list.append(listItem)
  return listItem
  })

  
};

renderTasks(tasks);
// add functionality
document.querySelector(".create-task-btn").onclick = () => {
  const newValueText = document.querySelector(".task-input").value;
  const newObj = { text: newValueText, done: false };
  tasks.push(newObj);
  const newArr = tasks.filter(obj=>obj.text===newValueText);
  console.log(newArr)
  renderTasks(newArr);
};



