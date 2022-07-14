import _ from 'lodash';
import './style.css';

const toDoList = document.querySelector('#todo');
const list = document.querySelector('#selected-list');
const firstDiv = document.createElement('div');
firstDiv.id = 'stats';
const secondDiv = document.createElement('div');
secondDiv.id = 'list';
const ul = document.createElement('ul');
ul.id = 'add-activity';
const ul2 = document.createElement('ul');
ul2.id = 'activity-list';
const li2 = document.createElement('li');
li2.id = 'display';
const li = document.createElement('li');
const thirdDiv = document.createElement('div');
thirdDiv.id = 'refresh';
const h2 = document.createElement('h2');
h2.title = 'todolist';
h2.innerHTML = 'ToDoList';
const span = document.createElement('span');
span.id = 'count show';
const form = document.querySelector('#form');
const foot = document.querySelector('#footer');

toDoList.appendChild(list);
list.append(firstDiv, secondDiv);
firstDiv.appendChild(h2);
firstDiv.appendChild(thirdDiv);
thirdDiv.appendChild(span);
secondDiv.append(ul, ul2);
ul2.appendChild(li2);

ul.appendChild(li);
li.appendChild(form);

thirdDiv.innerHTML += `<i class='fa fa-refresh'></i>`;
foot.innerHTML += `<button type='button' class='link-button clear-completed js-clear-completed'>Clear all completed</button>`;

const activityList = [
  {
    description: 'having my bath',
    completed: false,
    index: 0,
  },
  {
    description: 'cleaning',
    completed: false,
    index: 1,
  },
  {
    description: 'eating',
    completed: false,
    index: 2,
  },
];

const showList = () => {
  let listitem = '';
  for (let i = 0; i < activityList.length; i += 1) {
    const listitems = `<div>
    <ul>
      <li>
        <input type="checkbox" class="check" ${activityList[i].completed}>
        <span>${activityList[i].description}</span>
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        <i class="fa fa-trash" aria-hidden="true"></i>
      </li>
    </ul>
   </div>`;
    listitem += listitems;
  }
  li2.innerHTML = listitem;
};
showList();
