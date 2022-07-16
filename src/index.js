// import _ from 'lodash';
import './style.css';
import ToDoList from './modules/localstorage.js';
import displayPage from './modules/UI.js';

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

list.append(firstDiv, secondDiv);
firstDiv.appendChild(h2);
firstDiv.appendChild(thirdDiv);
thirdDiv.appendChild(span);
secondDiv.append(ul, ul2);
ul2.appendChild(li2);

ul.appendChild(li);
li.appendChild(form);

thirdDiv.innerHTML += "<i class='fa fa-refresh'></i>";
foot.innerHTML
  += "<button type='button' class='link-button clear-completed js-clear-completed'>Clear all completed</button>";

const input = document.getElementById('newactivity');
const btn = document.getElementById('btn');

let activityList = [];
activityList = JSON.parse(localStorage.getItem('tasklists')) || [];
displayPage(activityList);

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const certainInput = new ToDoList(input.value);
  certainInput.addActivity(activityList);
  input.value = '';
  displayPage(activityList);
});

const edit = document.querySelectorAll('.fa-ellipsis-v');
edit.forEach((edits, index) => edits.addEventListener('click', () => ToDoList.editActivityEntered(activityList, index)));
