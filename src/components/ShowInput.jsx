import { useState } from 'react'

const ShowInput = () => {

	const [yourText, setYourText] = useState('')

	return <>
		<input type="text" value={yourText} onChange={(e) => { setYourText(e.target.value) }} />
		<p>Your text: {yourText}</p>
	</>
}

export default ShowInput