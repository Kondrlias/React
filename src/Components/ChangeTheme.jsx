import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ChangeTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}> Сменить тему</button>;
};

export default ChangeTheme;
