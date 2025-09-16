import { memo } from "react";

function CardItem({ item, setItem }) {
  console.log(`Rerender Card item ${item.id}`);

  const addItem = (id) => {
    setItem((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  };

  const deleteItem = (id) => {
    setItem((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className={"card-item"}>
      <p>
        {item.title} (Кол-во: {item.count})
      </p>
      <div>
        <button onClick={() => addItem(item.id)}>+1</button>
        <button onClick={() => deleteItem(item.id)}>Удалить</button>
      </div>
    </div>
  );
}

export default memo(CardItem);
