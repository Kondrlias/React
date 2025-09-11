const List = ({ array, changeStatus }) => {
  return (
    <>
      <ul>
        {array.map((item) => {
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
                  changeStatus(item.id);
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
