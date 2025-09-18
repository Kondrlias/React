import { useContext, useState } from "react";
import CardItem from "./CardItem";
import { ThemeContext } from "./ThemeContext";

function Basket() {
  const theme = useContext(ThemeContext);

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
    <div className={theme}>
      <article className={"form"}>
        <h2>Корзина товаров</h2>
        {items.map((item) => {
          return <CardItem key={item.id} item={item} setItem={setItem} />;
        })}
        <button onClick={clear}>Очистить корзину</button>
      </article>
    </div>
  );
}

export default Basket;
