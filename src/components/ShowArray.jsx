const ShowArray = ({ array }) => {
	return <>
		<h2>Работа с массивом</h2>
		{array.map(item =>  (<h2>{item}</h2>) )}
	</>
}

export default ShowArray