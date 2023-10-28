
const addTask = document.getElementById('add-task');
const taskInput = document.getElementById('input-task');
const taskContainer = document.getElementById('tasks-container');
let open = document.getElementById("open-modal");
let close = document.getElementById("close-btn");
let modalContainer = document.getElementById("modal-container");

close.addEventListener("click", function () {
    modalContainer.style.display = "none";
})

window.addEventListener("click", function (e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = "none";
    }
})


// Event listenr 
addTask.addEventListener('click', () => { 

    if (taskInput.value === '') {
        modalContainer.style.display = "block";
    } else {
        let task = document.createElement('div');
    task.classList.add('task');
    let li = document.createElement('li');
    li.innerText = `${taskInput.value}`;
    task.appendChild(li);

    taskContainer.appendChild(task);
    taskInput.value = "";
    let btnsContainer = document.createElement('div');
    btnsContainer.classList.add('btns-container');
    task.appendChild(btnsContainer)

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    checkBtn.classList.add('complete-btn');
    btnsContainer.appendChild(checkBtn);

    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fa fa-trash"></i>'
    removeBtn.classList.add('remove-btn');
    btnsContainer.appendChild(removeBtn);
    checkBtn.addEventListener("click", () => {
        task.classList.add('done');
    });
    
    removeBtn.addEventListener("click", function() {
        task.remove();
    })
    }




    
}) 