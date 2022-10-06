
import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {

  let [selectedCategory, setSelectedCategory] = useState(false);
  let [taskData, newTaskData] = useState([]);
  let [category, setCategory] = useState("All");

  useEffect(() => {
    let t = TASKS.filter((task) => {
      if (category === "All") {
        return task;
      }
      if (task.category === category) {
        return task;
      } else {
        return null;
      }
    });

    newTaskData(t);
  }, [selectedCategory]);

  const handleBtns = (e) => {
    setCategory(e.target.value);

    setSelectedCategory(e.target.value);
  };

  function handleNewItem(createdItem) {
    newTaskData([...taskData, createdItem]);
  }
  
  function handleDeleteTask(deletedTaskText) {
    newTaskData(taskData.filter((task) => task.text !== deletedTaskText));
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleBtns={handleBtns}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewItem} />
      <TaskList
        onDeleteTask={handleDeleteTask}
        tasks={taskData}
        category={category}
      />
    </div>
  );
}

export default App;
