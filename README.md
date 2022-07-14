![](https://img.shields.io/badge/Microverse-blueviolet)

# Project Name

> Description the project.

class toDoList {
  constructor(activity) {
    this.activity = activity;
  }
}

class activityRecords {
  static gettoDoList() {
    let listTexts;
    if (localStorage.getItem('listTexts') === null) {
      listTexts = [];
    } else {
      listTexts = JSON.parse(localStorage.getItem('listTexts'));
    }
    return listTexts;
  }

  static addActivity(toDo) {
    const listTexts = activityRecords.gettoDoList();
    listTexts.push(toDo);
    localStorage.setItem('listTexts', JSON.stringify(listTexts));
  }
}

class UI {
  static showTheActivities() {
    const listTexts = activityRecords.gettoDoList();
    listTexts.forEach((element) => UI.addActivity(toDo));
  }
  static addActivity(element) {
    const toDoList = document.getElementById('todo');
    const list = document.getElementById('selected-list');
    const firstDiv = document.createElement('div');
    firstDiv.id = 'stats';
    const secondDiv = document.createElement('div');
    secondDiv.id = 'list';

    toDoList.appendChild(list);
    list.append(firstDiv, secondDiv);
  }
}



## Built With

- Major languages
- Frameworks
- Technologies used

## Live Demo (if available)

[Live Demo Link](https://livedemo.com)


## Getting Started

**This is an example of how you may give instructions on setting up your project locally.**
**Modify this file to match your project, remove sections that don't apply. For example: delete the testing section if the currect project doesn't require testing.**


To get a local copy up and running follow these simple example steps.

### Prerequisites

### Setup

### Install

### Usage

### Run tests

### Deployment



## Authors

👤 **Author1**

- GitHub: [@githubhandle](https://github.com/githubhandle)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://linkedin.com/in/linkedinhandle)

👤 **Author2**

- GitHub: [@githubhandle](https://github.com/githubhandle)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://linkedin.com/in/linkedinhandle)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
