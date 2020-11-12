import React from "react";
import Todo from "./Todo";
import '../index.scss'

const TodoList = (props) => {
  return (
    <div className='todoDiv'>
      {props.todos.map((todo) => (
          <div className='todo'>
        <Todo todo={todo} dispatch={props.dispatch} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
