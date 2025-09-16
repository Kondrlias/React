import { memo } from "react";

function TaskItem({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((item, index) => {
          return <Task key={index} task={item} />;
        })}
      </ul>
    </div>
  );
}

const Task = memo(({ task }) => {
  return <li>{task}</li>;
});

export default memo(TaskItem);
