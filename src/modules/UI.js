import ToDoList from './localstorage.js';

const displayPage = (activityList) => {
  const display = document.querySelector('#display');

  display.innerHTML = '';
  activityList.map((activity, index) => {
    display.innerHTML += `<div>
    <ul>
    <li>
      <input type="checkbox" class="check" ${index}>
    <input class="entry" value="${activity.listOfActivities}" id="text-input">
      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      <i class="fa fa-trash" aria-hidden="true"></i>
    </li>
  </ul>
 </div>`;
    const clear = document.querySelectorAll('.fa-trash');
    clear.forEach((activity, index) => activity.addEventListener('click', () => ToDoList.deleteActivity(activityList, index)));
    return activityList;
  });
};
export default displayPage;
