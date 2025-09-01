import { useState } from 'react'

function Sibling() {
	const [text, setText] = useState(false)
	const hasText = () => {
		setText((text) => !text)
	}
	return (
		<>
			<p>{text}</p>
			<button onClick={() => { hasText() }}>Нажми меня</button>
			{text && <p>Redev</p> }
		</>
	)
}

export default Sibling

