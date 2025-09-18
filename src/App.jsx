import { useState, useEffect } from "react";
import "./App.css";
import ChangeTheme from "./Components/ChangeTheme";
import Basket from "./Components/FormBasket";
import Tasks from "./Components/FormTask";
import User from "./Components/FormUser";
import { ThemeContext, themes } from "./Components/ThemeContext";
import "./theme.css";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light,
    );
  };

    useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>
        <ChangeTheme />
        <User />
        <Tasks />
        <Basket />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
