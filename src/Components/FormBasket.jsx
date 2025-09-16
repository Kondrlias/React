import { useState } from "react";
import CardItem from "./CardItem";

function Basket() {
  const [items, setItem] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const clear = () => {
    setItem((prevI) => {
      return prevI.map((i) => ({
        ...i,
        count: 0,
      }));
    });
  };

  return (
    <article className={"form"}>
      <h2>Корзина товаров</h2>
      {items.map((item) => {
        return <CardItem key={item.id} item={item} setItem={setItem} />;
      })}
      <button onClick={clear}>Очистить корзину</button>
    </article>
  );
}

export default Basket;
