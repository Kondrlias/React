import { useState } from 'react'


function Tasks() {
	const [tasks, setTasks] = useState(['Task1'])

	const getTasks = () => {
		setTasks((prevT) => ([...prevT, 'newTAsk']))
	}
	const deleteTasks = () => {
		setTasks(prevT => {
			const newTasks = [...prevT]
			newTasks.pop() // Удаляем последнюю задачу
			return newTasks
		})
	}

	return <div>
		<article className='form'>
			<h2>Список задач</h2>
			<ul>
				{tasks.map(item => { return <li>{item}</li> })}
			</ul>
			<button onClick={getTasks}>Добавить задачу</button>
			<button onClick={deleteTasks}>Удалить последнюю задачу</button>
		</article>

	</div>
}

export default Tasks