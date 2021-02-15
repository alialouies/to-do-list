let tasks = [];
let dreams = [];

const taskSection = document.getElementById('tasks');
const dreamsSection = document.getElementById('dreams');


class Task {
    constructor(title, date, text){
        this.title = title,
        this.date = date,
        this.text = text
    }
};

class Dream {
    constructor(title, date, text) {
        this.title = title,
        this.date = date,
        this.text = text
    }
};



function addTask(task){
    tasks.push(task)
    display();
}

function addDream(dream){
    dreams.push(dream)
    displayDream();
}

const taskBtn = document.getElementById('tasks-form');
taskBtn.addEventListener('submit', (e) => {
    const title = document.getElementById("title").value;
    const date = document.getElementById('time').value;
    const text = document.getElementById('description').value;
    const newTask = new Task(title, date, text);
    e.preventDefault();
    addTask(newTask);
    clearForm();
})

const dreamBtn = document.getElementById('dream-form');
dreamBtn.addEventListener('submit', (e) => {
    const title = document.getElementById("dream-title").value;
    const date = document.getElementById('due-date').value;
    const text = document.getElementById('dream-description').value;
    const newDream = new Dream(title, date, text);
    e.preventDefault();
    addDream(newDream);
    clearForm();
})



function display() {
    taskSection.innerHTML = null;
    tasks.forEach((Task, index) => {
        let card = document.createElement('div');
        taskSection.appendChild(card);
        card.innerHTML = `<h4>${Task.title}</h4>
        <time>${Task.date}</time>
        <p>${Task.text}</p>`
        card.style.cssText = "background-color: #fafab3; display: flex; flex-direction: column; width: 200px; padding: 20px; margin-top: 5px;"
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Done";
        card.appendChild(deleteBtn);


        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            display();
        })
    })

}

function displayDream() {
    dreamsSection.innerHTML = null;
    dreams.forEach((Dream, index) => {
        let card = document.createElement('div');
        dreamsSection.appendChild(card);
        card.innerHTML = `<h4>${Dream.title}</h4>
        <time>${Dream.date}</time>
        <p>${Dream.text}</p>`
        card.style.cssText = "background-color: #fad1d8; display: flex; flex-direction: column; width: 200px; border-radius: 10px; padding: 10px; margin-top: 5px;"
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Done";
        card.appendChild(deleteBtn);


        deleteBtn.addEventListener('click', () => {
            dreams.splice(index, 1);
            displayDream();
        })
    })

}

function clearForm() {
    title.value = '';
    document.getElementById('time').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dream-title').value = '';
    document.getElementById('dream-description').value = '';
    document.getElementById('due-date').value = '';

}