import { memo } from "react";

function UserInfo({ user }) {
  return (
    <div>
      <h2>Профиль пользователя</h2>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? "Активен" : "Не активен"}</p>
    </div>
  );
}

export default memo(UserInfo);
