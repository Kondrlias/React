import { useState } from 'react'

const ButtonPlus = () => {
	const [count, setCount] = useState(0)
	return <>
		< p > {count}</p>
		<button onClick={() => setCount(c => c + 1)}>Click me</button>
	</>
}

export default ButtonPlus