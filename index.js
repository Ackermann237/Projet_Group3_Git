var todoList = []
var comdoList = [];
var remList = [];
var addButton = document.getElementById("add-button")
var todoInput = document.getElementById("todo-input")
var deleteAllButton = document.getElementById("delete-all")
var allTodos = document.getElementById("all-todos");
var deleteSButton = document.getElementById("delete-selected")

// Charger la liste depuis le localStorage
function loadTodoList() {
    const savedList = localStorage.getItem("todoList");
    if (savedList) {
        todoList = JSON.parse(savedList);
        update();
        addinmain(todoList);
    }
}

// Charger la liste de tâches au démarrage
loadTodoList();


//event listners for add and delete
addButton.addEventListener("click", add)
deleteAllButton.addEventListener("click", deleteAll)
deleteSButton.addEventListener("click", deleteS)


//event listeners for filtersk
document.addEventListener('click', (e) => {
    if (e.target.className.split(' ')[0] == 'complete' || e.target.className.split(' ')[0] == 'ci') {
        completeTodo(e);
    }
    if (e.target.className.split(' ')[0] == 'delete' || e.target.className.split(' ')[0] == 'di') {
        deleteTodo(e)
    }
    if (e.target.id == "all") {
        viewAll();
    }
    if (e.target.id == "rem") {
        viewRemaining();
    }
    if (e.target.id == "com") {
        viewCompleted();
    }

})
//event listner for enter key
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        add();
    }
});


//updates the all the remaining, completed and main list
function update() {
    comdoList = todoList.filter((ele) => {
        return ele.complete

    })
    remList = todoList.filter((ele) => {
        return !ele.complete
    })
    document.getElementById("r-count").innerText = todoList.length.toString();
    document.getElementById("c-count").innerText = comdoList.length.toString();

}

//adds the task in main list

function add() {
    var value = todoInput.value;
    if (value === '') {
        alert("😮 Task cannot be empty")
        return;
    }
    todoList.push({
        task: value,
        id: Date.now().toString(),
        complete: false,
    });

    todoInput.value = "";
    update();
    addinmain(todoList);
}


//renders the main list and views on the main content

function addinmain(todoList) {
    allTodos.innerHTML = ""
    todoList.forEach(element => {
        var x = `<li id=${element.id} class="todo-item">
    <p id="task"> ${element.complete ? `<strike>${element.task}</strike>` : element.task} </p>
    <div class="todo-actions">
                <button class="complete btn btn-success">
                    <i class=" ci bx bx-check bx-sm"></i>
                </button>

                <button class="delete btn btn-error" >
                    <i class="di bx bx-trash bx-sm"></i>
                </button>
            </div>
        </li>`
        allTodos.innerHTML += x
    });
}

function saveList() {
    // Enregistrer todoList dans localStorage
    localStorage.setItem("todoList", JSON.stringify(todoList));

    // Afficher une alerte de succès
    alertBox.style.display = "block";
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 2000); // Cache l'alerte après 2 secondes
}

// Charger les tâches du localStorage au chargement de la page
function loadList() {
    const savedTodos = JSON.parse(localStorage.getItem("todoList"));
    if (savedTodos) {
        todoList = savedTodos;
        update();
        addinmain(todoList);
    }
}

// Charger la liste au démarrage
loadList();


//deletes and indiviual task and update all the list
function deleteTodo(e) {
    var deleted = e.target.parentElement.parentElement.getAttribute('id');
    todoList = todoList.filter((ele) => {
        return ele.id != deleted
    })

    update();
    addinmain(todoList);

}

//completes indiviaula task and updates all the list
function completeTodo(e) {
    var completed = e.target.parentElement.parentElement.getAttribute('id');
    todoList.forEach((obj) => {
        if (obj.id == completed) {
            if (obj.complete == false) {
                obj.complete = true
                e.target.parentElement.parentElement.querySelector("#task").classList.add("line");
            } else {
                obj.complete = false

                e.target.parentElement.parentElement.querySelector("#task").classList.remove("line");
            }
        }
    })

    update();
    addinmain(todoList);
}


//deletes all the tasks
function deleteAll(todo) {

    todoList = []

    update();
    addinmain(todoList);

}

//deletes only completed task
function deleteS(todo) {

    todoList = todoList.filter((ele) => {
        return !ele.complete;
    })


    update();
    addinmain(todoList);

}


// functions for filters
function viewCompleted() {
    addinmain(comdoList);
}

function viewRemaining() {

    addinmain(remList);
}
function viewAll() {
    addinmain(todoList);
}
// Bouton pour sauvegarder la liste dans le localStorage
var saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", saveTodoList);

function saveTodoList() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    showAlert("La liste a été enregistrée avec succès !");
}

// Fonction pour afficher une alerte
function showAlert(message) {
    const alertBox = document.getElementById("alert");
    alertBox.innerText = message;
    alertBox.style.display = "block";
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
}
