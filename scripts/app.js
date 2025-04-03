const addTaskBtn = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    if (taskInput.value !== '') {
        let content = taskInput.value.trim();
        let newTask = document.createElement('li');
        let newTaskbtn = document.createElement('button');
        newTaskbtn.innerText = 'delete';
        newTask.innerText = content;
        newTask.appendChild(newTaskbtn);
        taskList.appendChild(newTask);
        
        newTaskbtn.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });
        
        taskInput.value = '';
    } else {
        let msg = document.createElement('p');
        msg.innerText = 'Please enter a task.';
        document.body.appendChild(msg);
    }
});
