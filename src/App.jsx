import { useCallback, useState, useMemo } from "react";
import "./App.css";
import CounterButton from "./components/CounterButton";
import ItemList from "./components/ItemList";
import SearchInput from "./components/SearchInput";

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const items = useMemo(() => {
    return [...Array(102)].map((item, index) => `${index + 1} элемент`);
  }, []);

  const toSearch = useCallback((search) => {
    setSearch(search);
  }, []);

  const onClick = useCallback(() => {
    setCount((prevNum) => prevNum + 1);
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <CounterButton count={count} onClick={onClick} />
      <SearchInput search={search} toSearch={toSearch} />
      <ItemList array={items} search={search} />
    </>
  );
}

export default App;
