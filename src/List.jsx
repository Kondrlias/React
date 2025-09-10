import { useEffect, useState } from "react";

const List = ({ array }) => {
  const [items, setItems] = useState(array);

  const handleClick = (id) => {
    console.log("click");
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item,
      ),
    );
  };

  useEffect(() => {
    setItems(array);
  }, [array]);

  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                textDecoration: item.status ? "line-through" : "none",
                padding: "5px 0",
              }}
            >
              {item.title}
              <button
                onClick={() => {
                  handleClick(item.id);
                }}
                style={{ marginLeft: "20px" }}
              >
                {item.status ? "Undo" : "Done"}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
