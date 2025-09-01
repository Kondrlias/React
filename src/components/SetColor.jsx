import { useState } from 'react'

const SetColor = () => {
	const [color, setColor] = useState('red')
	return <>
		<p style={{ color: color }} >Меняем цвет</p>
		<button onClick={() => { setColor(color === 'red' ? 'blue' : 'red') }}>Change color</button>
	</>
}

export default SetColor
