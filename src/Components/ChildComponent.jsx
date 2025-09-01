

const Child = ({ name, props }) => {
	return (
		<>
			<h1>Привет, {name}!</h1>
			<p>Текущий счетчик: {props}</p>
		</>)
}

export default Child