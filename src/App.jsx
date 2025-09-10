import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "First task", status: false },
    { id: 2, title: "Second task", status: false },
    { id: 3, title: "Third task", status: false },
  ]);

  const [text, setText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    console.log("Render");
  }, [text]);

  function focusInput() {
    inputRef.current.focus();
  }

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handlePush = (event) => {
    if (event.key === "Enter") {
      setToDo([...toDo, { id: toDo.length + 1, title: text, status: false }]);
      setText("");
    }
  };
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handlePush}
        ref={inputRef}
      />
      <button onClick={focusInput} style={{ marginLeft: "20px" }}>
        Focus
      </button>
      <List array={toDo} style={{ padding: "20px 0" }} />
    </>
  );
}

export default App;
