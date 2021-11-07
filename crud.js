class Task {
    constructor(descr) {
        this.id = Math.random() * 1000;
        this.description = descr;
    }

}

class TaskList {
    constructor() {
        this.list = []
    }

    addTask(task) {
        this.list.push(task)
        updateHtmlList()
    }

    removeTask(id) {
        let indexToRemove = this.list.findIndex(function (element) {
            return element.id === id;
        })
        this.list.splice(indexToRemove, 1);
        updateHtmlList()
    }
    removeAll() {
        //this.list.splice(0, this.list.length);
        this.list = [];
        updateHtmlList()
    }
}

const taskList = new TaskList();

function onClick() {
    let descr = document.getElementById('description').value;
    let newTask = new Task(descr);
    taskList.addTask(newTask);
    updateHtmlList()
}

function updateHtmlList() {
    let list = document.getElementById('list')
    list.innerHTML = taskList.list.map(function (task) {
        let id = task.id
        let description = task.description

        let removeButton = `<button onclick="taskList.removeTask(${id})">X</button>`

        return `<li>${description} ${removeButton}</li>`;
    }).join('');
}
