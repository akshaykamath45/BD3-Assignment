# AirFlow Task Management System

AirFlow is a simple backend task management system that helps users manage their tasks efficiently. This project provides RESTful APIs for adding, editing, deleting, and filtering tasks.

## Objective

The goal of this project is to provide backend functionality for managing tasks. Users can:

- Add tasks
- Edit task details (text and priority)
- Delete tasks
- Retrieve all tasks
- Sort tasks by priority
- Filter tasks by priority

The backend is built using **Express.js** and deployed on **Vercel**.  
Live URL: [https://bd-3-assignment-two.vercel.app/](https://bd-3-assignment-two.vercel.app/)

---

## API Endpoints

### 1. Add a Task to the Task List
**Endpoint**: `/tasks/add`  
**Method**: GET  
**Query Parameters**:  
- `taskId` (integer): The unique ID of the task.  
- `text` (string): The description of the task.  
- `priority` (integer): The priority of the task.  

**Example**: 

[https://bd-3-assignment-two.vercel.app/tasks/add?taskId=4&text=Review%20code&priority=1](https://bd-3-assignment-two.vercel.app/tasks/add?taskId=4&text=Review%20code&priority=1)

**Response**:  
```json
{
  "tasks": [
    { "taskId": 1, "text": "Fix bug #101", "priority": 2 },
    { "taskId": 2, "text": "Implement feature #202", "priority": 1 },
    { "taskId": 3, "text": "Write documentation", "priority": 3 },
    { "taskId": 4, "text": "Review code", "priority": 1 }
  ]
}
```

### 2. Read All Tasks
**Endpoint**: `/tasks`  
**Method**: GET  

**Example**: 

[https://bd-3-assignment-two.vercel.app/tasks](https://bd-3-assignment-two.vercel.app/tasks)


**Response**:  
```json
{
  "tasks": [
    { "taskId": 1, "text": "Fix bug #101", "priority": 2 },
    { "taskId": 2, "text": "Implement feature #202", "priority": 1 },
    { "taskId": 3, "text": "Write documentation", "priority": 3 }
  ]
}

```

### 3. Sort Tasks by Priority
**Endpoint**: `/tasks/sort-by-priority`  
**Method**: GET  

**Example**: 

[https://bd-3-assignment-two.vercel.app/tasks/sort-by-priority](https://bd-3-assignment-two.vercel.app/tasks/sort-by-priority)


**Response**:  
```json
{
  "tasks": [
    { "taskId": 2, "text": "Implement feature #202", "priority": 1 },
    { "taskId": 1, "text": "Fix bug #101", "priority": 2 },
    { "taskId": 3, "text": "Write documentation", "priority": 3 }
  ]
}

```

### 4. Edit Task Priority
**Endpoint**: `/tasks/edit-priority`  
**Method**: GET  
**Query Parameters**:  
- `taskId` (integer): The ID of the task to update.  
- `priority` (integer): The new priority value.  

**Example**: 

[https://bd-3-assignment-two.vercel.app/tasks/edit-priority?taskId=1&priority=1](https://bd-3-assignment-two.vercel.app/tasks/edit-priority?taskId=1&priority=1)


**Response**:  
```json
{
  "tasks": [
    { "taskId": 1, "text": "Fix bug #101", "priority": 1 },
    { "taskId": 2, "text": "Implement feature #202", "priority": 1 },
    { "taskId": 3, "text": "Write documentation", "priority": 3 }
  ]
}

```

### 5. Edit Task Text
**Endpoint**: `/tasks/edit-text`  
**Method**: GET  
**Query Parameters**:  
- `taskId` (integer): The ID of the task to update.  
- `text` (string): The new text for the task..  

**Example**: 

[https://bd-3-assignment-two.vercel.app/tasks/edit-text?taskId=3&text=Update%20documentation](https://bd-3-assignment-two.vercel.app/tasks/edit-text?taskId=3&text=Update%20documentation)


**Response**:  
```json
{
  "tasks": [
    { "taskId": 1, "text": "Fix bug #101", "priority": 2 },
    { "taskId": 2, "text": "Implement feature #202", "priority": 1 },
    { "taskId": 3, "text": "Update documentation", "priority": 3 }
  ]
}
```

### 6. Delete a Task
**Endpoint**: `/tasks/delete`  
**Method**: GET  
**Query Parameters**:  
- `taskId` (integer): The ID of the task to delete.  

**Example**: 

[https://bd-3-assignment-two.vercel.app/tasks/delete?taskId=2](https://bd-3-assignment-two.vercel.app/tasks/delete?taskId=2)


**Response**:  
```json
{
  "tasks": [
    { "taskId": 1, "text": "Fix bug #101", "priority": 2 },
    { "taskId": 3, "text": "Write documentation", "priority": 3 }
  ]
}

```

### 7. Filter Tasks by Priority
**Endpoint**: `/tasks/filter-by-priority`  
**Method**: GET  
**Query Parameters**:  
- `priority` (integer): The priority to filter tasks by .  

**Example**: 

[https://bd-3-assignment-two.vercel.app/tasks/filter-by-priority?priority=1](https://bd-3-assignment-two.vercel.app/tasks/filter-by-priority?priority=1)

**Response**:  
```json
{
  "tasks": [
    { "taskId": 2, "text": "Implement feature #202", "priority": 1 }
  ]
}
```

**Note**: These are example requests and responses. They are subject to change based on modifications made to the server.



