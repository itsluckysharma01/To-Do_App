const todoInput = document.getElementById("todoInput");
const todoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");
const reminderSelect = document.getElementById("reminderSelect");

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
    checkReminders();
    // Check reminders every hour
    setInterval(checkReminders, 3600000);
});

addTodoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        addTodo();
    }
});
function addTodo(){
    const todoText = todoInput.value.trim();
    const reminderType = reminderSelect.value;
    
    if (todoText !== ''){
        // Check for duplicates
        const existingTodos = todoList.querySelectorAll('.todo-text');
        const isDuplicate = Array.from(existingTodos).some(todo => 
            todo.textContent.toLowerCase() === todoText.toLowerCase()
        );
        
        if (isDuplicate) {
            showMessage("This task already exists!", "error");
            return;
        }
        
        // Create task object
        const task = {
            id: Date.now(),
            text: todoText,
            reminder: reminderType,
            createdAt: new Date().toISOString(),
            lastReminded: null
        };
        
        // Create list item
        createTaskElement(task);
        
        // Save to localStorage
        saveTask(task);
        
        // Reset form
        todoInput.value = '';
        reminderSelect.value = 'none';
        showMessage("Task added successfully!", "success");
    }
}

// Save task to localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
    tasks.push(task);
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
    tasks.forEach(task => createTaskElement(task));
}

// Delete task from localStorage
function deleteTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

// Check for reminders
function checkReminders() {
    const tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
    const now = new Date();
    
    tasks.forEach(task => {
        if (task.reminder === 'none') return;
        
        const createdDate = new Date(task.createdAt);
        const lastReminded = task.lastReminded ? new Date(task.lastReminded) : null;
        
        let shouldRemind = false;
        
        if (task.reminder === 'daily') {
            // Check if it's been at least 24 hours
            const hoursSinceCreated = (now - createdDate) / (1000 * 60 * 60);
            const hoursSinceLastReminder = lastReminded ? (now - lastReminded) / (1000 * 60 * 60) : Infinity;
            
            shouldRemind = hoursSinceCreated >= 24 && hoursSinceLastReminder >= 24;
        } else if (task.reminder === 'weekly') {
            // Check if it's been at least 7 days
            const daysSinceCreated = (now - createdDate) / (1000 * 60 * 60 * 24);
            const daysSinceLastReminder = lastReminded ? (now - lastReminded) / (1000 * 60 * 60 * 24) : Infinity;
            
            shouldRemind = daysSinceCreated >= 7 && daysSinceLastReminder >= 7;
        }
        
        if (shouldRemind) {
            showReminderNotification(task);
            // Update last reminded time
            task.lastReminded = now.toISOString();
            updateTask(task);
        }
    });
}

// Update task in localStorage
function updateTask(updatedTask) {
    let tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
    const taskIndex = tasks.findIndex(task => task.id === updatedTask.id);
    if (taskIndex !== -1) {
        tasks[taskIndex] = updatedTask;
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }
}

// Show reminder notification
function showReminderNotification(task) {
    const reminderType = task.reminder === 'daily' ? 'Daily' : 'Weekly';
    showMessage(`${reminderType} Reminder: "${task.text}"`, "reminder");
    
    // Browser notification if permission is granted
    if (Notification.permission === 'granted') {
        new Notification(`${reminderType} Task Reminder`, {
            body: task.text,
            icon: '📝'
        });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(`${reminderType} Task Reminder`, {
                    body: task.text,
                    icon: '📝'
                });
            }
        });
    }
}

// Function to show messages
function showMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert message after the input
    const todoInput = document.querySelector('.todo-input');
    todoInput.parentNode.insertBefore(messageDiv, todoInput.nextSibling);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        if (messageDiv) {
            messageDiv.remove();
        }
    }, 3000);
}

// Create task element in DOM
function createTaskElement(task) {
    const li = document.createElement("li");
    li.setAttribute('data-task-id', task.id);
    
    // Create a span for the todo text
    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = "todo-text";
    
    // Create reminder indicator
    const reminderIndicator = document.createElement("span");
    reminderIndicator.className = "reminder-indicator";
    if (task.reminder === 'daily') {
        reminderIndicator.textContent = "📅 Daily";
        reminderIndicator.classList.add('daily');
    } else if (task.reminder === 'weekly') {
        reminderIndicator.textContent = "📆 Weekly";
        reminderIndicator.classList.add('weekly');
    }
    
    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function(){
        deleteTask(task.id);
        li.remove();
    });
    
    // Append elements to li
    li.appendChild(span);
    if (task.reminder !== 'none') {
        li.appendChild(reminderIndicator);
    }
    li.appendChild(deleteBtn);
    
    todoList.appendChild(li);
}