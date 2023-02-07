let todoInp = document.querySelector(".todo__inp"),
	todoAdd = document.querySelector(".todo__add"),
	todoList = document.querySelector(".todolist"),
	todoActive = document.querySelector(".todo__count")

let todos = [
	{ title: "Read the book", completed: false},
	{ title: "Drink coffee", completed: true},
	{ title: "Run", completed: false },
	{ title: "eat", completed: true },
	{ title: "go for a walk", completed: false }
]

function updateTodos(arr) {
	arr.forEach((el,index) =>{
		todoList.innerHTML += 
		`
			<li class="todo-item">
				<input type="checkbox" onclick="change(${index})" ${el.completed ? "checked" : null}/>
				<span class="todo-item__txt">${el.title}</span>
				<span class="todo-item__del">&times;</span>
			</li>
		`
	})

	document.querySelectorAll(".todo-item__del").forEach((item, id) => {
		item.addEventListener("click", () => {
			item.parentElement.remove()
			console.log(id)
			console.log(item)
			todos.splice(id, 1)
			check()
		})
	})
}


todoAdd.addEventListener("click", () => {

	if (todoInp.value !== "") {
		todoInp.classList.remove("error")

		let newTodo = { title: todoInp.value, completed: false }

		todos.push(newTodo)
		todoList.innerHTML = ""
		updateTodos(todos)
		check();
		todoInp.value = ''
	} else {
		todoInp.classList.add("error")
	}

})

function change(index){
	todos[index].completed = todoList.querySelectorAll('li input')[index].checked;
	check();
}

function check(){
	let namber = 0;
	for(let item of todoList.querySelectorAll('li')){

		if(item.querySelector('input').checked){
			namber++;
		}
	}
	document.querySelector(".counter").innerText = namber;

}

updateTodos(todos)
check();

// function todoActive() {

// }

document.querySelector(".todo__clear").addEventListener('click',function(){
	let total = [];
	for(let value of todos){
		if(!value.completed){
			total.push(value)
		}
	}
	todoList.innerHTML = "";
	todos = total;
	updateTodos(todos);
	check();
})