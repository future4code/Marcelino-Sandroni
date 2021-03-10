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
	console.log(`Box: ${weekBox}`)
	const task = document.createElement('input')
	task.type = 'text'
	weekBox.insertBefore(task, event.target)
	task.focus()

	task.onblur = verifyTaskValue
	task.onkeydown = verifyTaskValue
}

verifyTaskValue = (event) => {
	if(event.type === 'blur' || event.type === 'keydown' && event.key === 'Enter') {
		const task = event.target

		if(task.value) {
			console.log(task)
			const newTask= document.createElement('div')
			newTask.classList.add('task')
			newTask.textContent = `${task.value} ${time.value}`
			task.parentElement.insertBefore(newTask, task)

			task.remove()
			if(event.type === 'keydown') {
				createTaskOnBoard(event)
			}
		}
	}
}

weekBox.forEach(week => {
	const weekAddButton = document.createElement('button')
	weekAddButton.classList.add('week-addbutton')
	weekAddButton.textContent = '+'

	week.appendChild(weekAddButton)

	weekAddButton.onclick = createTaskOnBoard
})

naturalLanguage = text => {
	let task
	let week
	let time
	let regexTime = /(\w{1,3}\s\d{1,2}$)|(\d{1,2}\w{1,3}$)/g

	let weekDays = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
	let weekIndex = {domingo: 0, segunda: 1, terca: 2, quarta: 3, quinta: 4, sexta: 5, sabado: 6}

	time = text.match(regexTime)
	console.log(time)
	text

	text.match(/\w\w/gi)
	
}

addButton.onclick = (event) => {
	event.preventDefault()
	taskName.value = taskName.value.trim()

	if(taskName.value && weekDay.value) {
		naturalLanguage(taskName.value)
		const box = weekBox[weekDay.value]
		let task = document.createElement('div')
		task.classList.add('task')
		task.textContent = `${taskName.value} ${time.value}hrs`

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


