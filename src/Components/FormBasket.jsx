import { useState } from 'react'


function Items() {
	const [items, setItem] = useState([{ id: 1, title: "Футболка", count: 1 },
	{ id: 2, title: "Кепка", count: 2 },
	])

	const clear = () => {
		setItem(prevI => {
			return prevI.map(i => ({
				...i,
				count: 0
			}))
		})
	}

	const addItem = (id) => {
		setItem(prevItems =>
			prevItems.map(item =>
				item.id === id ? { ...item, count: item.count + 1 } : item
			)
		)
	}

	const deleteItem = (id) => {
		setItem(prevItems => prevItems.filter(item => item.id !== id))
	}
	
	return <article className={'form'}>
		<h2>Корзина товаров</h2>
		{items.map(item => {
			return <div className={'card-item'}>
				<p>{item.title} (Кол-во: {item.count})</p>
				<div>
					<button onClick={() => addItem(item.id)}>+1</button>
					<button onClick={() => deleteItem(item.id)}>Удалить</button>
				</div>
			</div>
		})}
		<button onClick={clear}>Очистить корзину</button>
	</article>
}

export default Items