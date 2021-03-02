const taskName = document.querySelector('#tarefa')
const weekDay = document.querySelector('#dias-semana')
const time = document.querySelector('#time')
const addButton = document.querySelector('#adicionar')
const weekBox = document.querySelectorAll('.semana > div')
const color = document.querySelector('#color')
const weekBoard = document.querySelector('.week-board')
const reset = document.querySelector('#limpar')

taskName.focus()


const createTaskOnBoard = (event) => {
	const weekBox = event.target.parentElement
	const task = document.createElement('input')
	task.type = 'text'
	weekBox.insertBefore(task, event.target)
	task.focus()

	task.onblur = verifyTaskValue
	//task.onkeydown = verifyTaskValue

}

verifyTaskValue = (event) => {
	const task = event.target
	if(task.value) {
		console.log("tentando inserir essa task")
		console.log(`${task.value}`)
		const newTask= document.createElement('div')
		newTask.classList.add('task')
		newTask.textContent = `${task.value} ${time.value}`
		console.log(task)
		console.log(task.parentElement)
		task.parentElement.insertBefore(task, newTask)
		task.remove()

	} else {
		console.log(`Sem dados, removendo INPUT`)
		task.remove()
	}
}

weekBox.forEach(week => {
	const weekAddButton = document.createElement('button')
	weekAddButton.classList.add('week-addbutton')
	weekAddButton.textContent = '+'

	week.appendChild(weekAddButton)

	weekAddButton.onclick = createTaskOnBoard
})

addButton.onclick = (event) => {
	event.preventDefault()
	taskName.value = taskName.value.trim()

	if(taskName.value && weekDay.value) {
		const box = weekBox[weekDay.value]
		let task = document.createElement('div')
		task.classList.add('task')
		task.textContent = `${taskName.value} ${time.value}hrs`

		box.append(task)
		box.insertBefore(task, box.querySelector('.week-addbutton'))
		taskName.value = ''
		taskName.placeholder = 'Digite mais tarefinhas...'
	} else {
		alert('Por digite algo né...\nE escolha o dia da semana.\nsou bobo não!')
	}
	
}


// color.oninput = (event) => {
// 	document.body.style.backgroundColor = color.value
// }

const checkList = event => {
	if([...event.target.classList].includes('task')) {
		event.target.classList.add('checked')
	}
}

resetTask = event => {
	event.preventDefault()
	allTasks = document.querySelectorAll('.task')
	allTasks.forEach(item => item.remove())
}

weekBoard.onclick = checkList
reset.onclick = resetTask


