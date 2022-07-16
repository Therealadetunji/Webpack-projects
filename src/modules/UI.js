import ToDoList from './localstorage.js';

const displayPage = (activityList) => {
  const display = document.querySelector('#display');

  display.innerHTML = '';
  activityList.map((activity, index) => {
    display.innerHTML += `<div>
    <ul>
    <li>
      <input type="checkbox" class="check" id='${index}' ${
  activity.completed ? 'checked' : 'not'
}>

    <input class="entry" value="${activity.listOfActivities}" id="update0">
      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      <i class="fa fa-trash" aria-hidden="true"></i>
    </li>
  </ul>
 </div>`;
    const clear = document.querySelectorAll('.fa-trash');
    clear.forEach((activity, index) => activity.addEventListener('click', () => ToDoList.deleteActivity(activityList, index)));
    return activityList;
  });
  const boxChecker = () => {
    const checked1 = document.querySelectorAll('input[type=checkbox]');

    checked1.forEach((e) => {
      e.addEventListener('change', () => {
        e.checked = true
          ? (activityList[e.id].completed = true)
          : (activityList[e.id].completed = false);
        localStorage.setItem('tasklists', JSON.stringify(activityList));
      });
    });
  };
  boxChecker();

  const clearAllCompleted = document.querySelector('.clear-completed');
  clearAllCompleted.addEventListener('click', () => {
    activityList = activityList.filter((list) => !list.completed);
    localStorage.setItem('tasklists', JSON.stringify(activityList));
    window.location.reload();

    activityList.forEach((activity, i) => {
      activity.index = i;
      localStorage.setItem('tasklists', JSON.stringify(activityList));
    });
    window.location.reload();
  });
};
export default displayPage;
