import React from "react";
import "../index.scss";

let Todo = (props) => {
  const toggleComplete = (id) => {
    props.dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  return (
    <p
      onClick={() => toggleComplete(props.todo.id)}
      className={props.todo.completed ? "completed" : ""}
    >
      {props.todo.task}
    </p>
  );
};
export default Todo;
