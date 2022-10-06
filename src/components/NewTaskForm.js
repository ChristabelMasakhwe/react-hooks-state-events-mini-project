import React, {useState} from "react";


function NewTaskForm({ categories,onTaskFormSubmit }) {
  const [taskName, setTaskName] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const createdItem = {
      text: taskName,
      category: taskCategory,
    };
    
    onTaskFormSubmit(createdItem);
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
    <label>
      Details
      <input
          type="text"
          name="text"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          value={taskName}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={(e) => {
            setTaskCategory(e.target.value);
          }}
          value={taskCategory}
        >
          {categories.map((category,index) => (
            <option key={index}>{category}</option>
          ))}
         
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
 
export default NewTaskForm;
