const ShowObj = ({ cardData }) => {
	return <>
		<h2>Работа с объектом</h2>
		<h3>Name: {cardData.title}</h3>
		<p>Price {cardData.price}</p>
	</>
}

export default ShowObj