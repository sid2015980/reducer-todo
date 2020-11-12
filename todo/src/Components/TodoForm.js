import React, { useState } from "react";
import "../index.scss";

const TodoForm = (props) => {
  const [newToDo, setToDo] = useState("");

  const handleChanges = (e) => {
    e.preventDefault();
    setToDo(e.target.value);
  };

  const addToDo = () => {
    const newItem = {
      task: newToDo,
      id: Date.now(),
      completed: false,
    };
    props.dispatch({ type: "ADD_TODO", payload: newItem });
    setToDo("");
  };

  const clearComplete = () => {
    props.dispatch({ type: "DELETE_TODO" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addToDo();
    }
  };

  return (
    <div className='form'>
      <input
        type="text"
        name="item"
        placeholder="Enter Todo Here.."
        value={newToDo}
        onChange={handleChanges}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addToDo}>Add Todo</button>
      <button onClick={clearComplete}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
