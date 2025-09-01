import { useState } from 'react'


function User() {
	const [user, setUser] = useState({
		name: "Иван",
		age: 25,
		isActive: true,
	})

	const changeName = () => {
		setUser(prevUser => ({
			...prevUser,
			name: prevUser.name === 'Иван' ? 'Juli' : 'Иван'
		}))
	}

	const increaseAge = () => {
		setUser(prevUser => ({
			...prevUser,
			age: prevUser.age + 1
		}))
	}

	const changeActive = () => {
		setUser(prevUser => ({
			...prevUser,
			isActive: !prevUser.isActive
		}))
	}

	return (
		<div>
			<article className='form'>
				<h2>Профиль пользователя</h2>
				<p>Имя: {user.name}</p>
				<p>Возраст: {user.age}</p>
				<p>Активен: {user.isActive ? 'Активен' : 'Не активен'}</p>
				<button onClick={changeName}>Сменить имя</button>
				<button onClick={increaseAge}>Увеличить возраст</button>
				<button onClick={changeActive}>Переключить активность</button>
			</article>
		</div>)

}

export default User