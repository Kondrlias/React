import { useState } from 'react'

const ShowText = () => {
	const [text, setText] = useState(false)
	
	return <>
	<button onClick={() => setText((i) => !i)}>I show you a text</button>
		{ text && (<p>Ты меня видишь!</p>)}
	</>
}

export default ShowText