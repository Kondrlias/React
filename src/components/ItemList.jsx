import { useMemo } from "react";

const ItemList = ({ search, array }) => {
  const filteredItems = useMemo(() => {
    return array.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase()),
    );
  }, [array, search]);

  return filteredItems.length > 0 ? (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : (
    <p>Не найдено</p>
  );
};

export default ItemList;
