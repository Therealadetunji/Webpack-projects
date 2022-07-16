// import { update } from 'lodash';

export default class ToDoList {
  constructor(listOfActivities) {
    this.listOfActivities = listOfActivities;
    this.completed = false;
    this.index = 0;
  }

  addActivity(activityList) {
    const theActivity = new ToDoList(this.listOfActivities);
    // the length of the activity in indexes
    theActivity.index = activityList.length;
    activityList.push(theActivity);
    localStorage.setItem('tasklists', JSON.stringify(activityList));
  }

  static deleteActivity(activityList, index) {
    activityList = activityList.filter((thetasks, i) => index !== i);
    localStorage.setItem('tasklists', JSON.stringify(activityList));
    window.location.reload();
    activityList.forEach((activity, i) => {
      activity.index = i;
      localStorage.setItem('tasklists', JSON.stringify(activityList));
    });
  }

  static editActivityEntered(activityList, index) {
    activityList[index].listOfActivities = document.getElementById(
      `update${index}`,
    ).value;
    localStorage.setItem('tasklists', JSON.stringify(activityList));
  }
}
