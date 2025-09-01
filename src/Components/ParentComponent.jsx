import { useState } from 'react'
import Child from './ChildComponent'
import Sibling from './SiblingComponent'

function Parent() {
	const [count, setCount] = useState(0)

	const addNum = () => {
		setCount(count + 1)
	}

	const minNum = () => {
		if (count > 0) { setCount(count - 1) }
	}
	const value = Math.ceil((Math.random() * 10))


	return (
		<div>
			<p>{count}</p>
			<button onClick={addNum}>Увеличить</button>
			<button onClick={() => { setCount(0) }}>Сбросить</button>
			<button onClick={() => { setCount(value) }}> Случайное значениe</button>
			<button onClick={minNum}>Уменьшить</button>
			<Child props={count} name={'Julia'} />
			<Sibling />
		</div>
	)
}

export default Parent