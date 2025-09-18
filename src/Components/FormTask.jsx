import { useState, useContext } from "react";
import TaskItem from "./TaskItem";
import { ThemeContext } from "./ThemeContext";

function Tasks() {
  const theme = useContext(ThemeContext);
  const [tasks, setTasks] = useState(["Task1"]);

  const getTasks = () => {
    setTasks((prevT) => [...prevT, `newTask ${1 + Math.random()}`]);
  };
  const deleteTasks = () => {
    setTasks((prevT) => {
      const newTasks = [...prevT];
      newTasks.pop();
      return newTasks;
    });
  };

  return (
    <div className={theme}>
      <article className="form">
        <h2>Список задач</h2>
        <TaskItem tasks={tasks} />
        <button onClick={getTasks ? getTasks : "Пусто"}>Добавить задачу</button>
        <button onClick={deleteTasks}>Удалить последнюю задачу</button>
      </article>
    </div>
  );
}

export default Tasks;
