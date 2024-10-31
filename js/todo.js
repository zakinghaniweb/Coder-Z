document.getElementById('add-btn').addEventListener('click', function() {
    let todoInput = document.getElementById('todo-input');
    let todoValue = todoInput.value;
    
    if (todoValue) {
        addTodoItem(todoValue);
        todoInput.value = '';
    }
});
let todoTasksDoneCount = 0;
let todoTasksCount = 0;
function addTodoItem(todoText) {
    let TotalTodoDoneResult = document.querySelector('.todo-done')
    let todoList = document.getElementById('todo-list');
    // Creating Elements
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.value = todoText;
    input.classList.add('todo-name');
    input.setAttribute('readonly', 'readonly');
    
    let buttonDiv = document.createElement('div');
    let inputDiv = document.createElement('div');
    
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');
    
    let editBtm = document.createElement('button');
    editBtm.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editBtm.classList.add('edit-btn');
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    let TotalTodoCountResult = document.querySelector('.todo-total-count')
    todoTasksCount++;
    TotalTodoCountResult.innerHTML = todoTasksCount;
    
    // Appending Childs
    inputDiv.appendChild(checkbox);
    inputDiv.appendChild(input);
    li.appendChild(inputDiv);
    li.appendChild(buttonDiv);
    buttonDiv.appendChild(editBtm);
    buttonDiv.appendChild(deleteBtn);

    checkbox.addEventListener("click",()=>{
        if (checkbox.checked) {
            todoTasksDoneCount++
            TotalTodoDoneResult.innerHTML = todoTasksDoneCount
            input.style = 'text-decoration: line-through'
        }
        else{
            todoTasksDoneCount--
            TotalTodoDoneResult.innerHTML = todoTasksDoneCount
            input.style = 'text-decoration: none'
        }
    })
    deleteBtn.addEventListener('click', function() {
        li.remove();
        if(todoTasksDoneCount > 0){
            todoTasksDoneCount--
            TotalTodoDoneResult.innerHTML = todoTasksDoneCount
        }
        if (todoTasksCount > 0) {
            todoTasksCount--
            TotalTodoCountResult.innerHTML = todoTasksCount;
        }
    });
    editBtm.addEventListener('click', function() {
        if (editBtm.innerHTML == '<i class="fa-solid fa-pen"></i>') {
            input.removeAttribute('readonly');
            input.focus();
            editBtm.innerHTML = 'Save';
            editBtm.style = 'background:green';
            editBtm
        } else {
            input.setAttribute('readonly', 'readonly');
            editBtm.style = 'background:#6a11cb';
            editBtm.innerHTML = '<i class="fa-solid fa-pen"></i>';
        }
    });
    todoList.appendChild(li);
}
