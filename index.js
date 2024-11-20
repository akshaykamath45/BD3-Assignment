const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
  let platformName = 'Airflow'.bold();
  res.send(`Welcome to ${platformName} Task Management System!`);
});

let tasks = [
  { taskId: 1, text: 'Fix bug #101', priority: 2 },
  { taskId: 2, text: 'Implement feature #202', priority: 1 },
  { taskId: 3, text: 'Write documentation', priority: 3 },
];

// add task
function addTasks(tasks, taskId, text, priority) {
  tasks.push({
    taskId, // since the key name is same as variable, no need to write as key:value
    text,
    priority,
  });
  return tasks;
}
app.get('/tasks/add', (req, res) => {
  let taskId = parseFloat(req.query.taskId);
  let text = req.query.text;
  let priority = parseFloat(req.query.priority);
  let result = addTasks(tasks, taskId, text, priority);
  res.json({ tasks: result });
});

// retrieve all tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// sort tasks by priority
function sortTasks(task1, task2) {
  return task1.priority - task2.priority;
}
app.get('/tasks/sort-by-priority', (req, res) => {
  tasks.sort(sortTasks);
  res.json({ tasks });
});

// edit task priority
function updateTaskPriority(tasks, taskId, priority) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      tasks[i].priority = priority;
    }
  }
  return tasks;
}
app.get('/tasks/edit-priority', (req, res) => {
  let taskId = parseFloat(req.query.taskId);
  let priority = parseFloat(req.query.priority);
  let updatedTasks = updateTaskPriority(tasks, taskId, priority);
  res.json({ tasks: updatedTasks });
});

// update task text
function updateTaskText(tasks, taskId, text) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      tasks[i].text = text;
    }
  }
  return tasks;
}
app.get('/tasks/edit-text', (req, res) => {
  let taskId = parseFloat(req.query.taskId);
  let text = req.query.text;
  let updatedTasks = updateTaskText(tasks, taskId, text);
  res.json({ tasks: updatedTasks });
});

// delete a task
function deleteTask(task, taskId) {
  return task.taskId !== taskId;
}
app.get('/tasks/delete', (req, res) => {
  let taskId = parseFloat(req.query.taskId);
  let result = tasks.filter((task) => deleteTask(task, taskId));
  res.json({ tasks: result });
});

//filter tasks by priority
function filterByPriority(task, priority) {
  return task.priority === priority;
}
app.get('/tasks/filter-by-priority', (req, res) => {
  let priority = parseFloat(req.query.priority);
  let filteredTasks = tasks.filter((task) => filterByPriority(task, priority));
  res.json({ tasks: filteredTasks });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
