import { useState, useContext } from "react";
import UserInfo from "./UserInfo";
import { ThemeContext } from "./ThemeContext";

function User() {
  const theme = useContext(ThemeContext);
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });

  const changeName = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: prevUser.name === "Иван" ? "Juli" : "Иван",
    }));
  };

  const increaseAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  const changeActive = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isActive: !prevUser.isActive,
    }));
  };

  return (
    <div className={theme}>
      <article className="form">
        <UserInfo user={user} />
        <button onClick={changeName}>Сменить имя</button>
        <button onClick={increaseAge}>Увеличить возраст</button>
        <button onClick={changeActive}>Переключить активность</button>
      </article>
    </div>
  );
}

export default User;
