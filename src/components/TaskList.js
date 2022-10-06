import React from "react";
import Task from "./Task";

function TaskList({ tasks, category, onDeleteTask }) {
  const taskList = tasks.map((task, index) => {
      return (
        <li key={index}>{
            <Task
              text={task.text}
              category={task.category}
              onDeleteTask={onDeleteTask}
              key={task.text}
            />}
        </li>
      );
    });
    return (
      <div className="tasks">
        {/* display a list of tasks using Task component */}
        {/* .filter((task) =>
              category === "All" ? task : task.category === category
            ) */}
        <ul>{taskList}</ul>
      </div>
    );
  }

export default TaskList;
