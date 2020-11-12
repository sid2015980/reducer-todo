import React, { useReducer } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import "../src/index.scss";

const initialValue = [
  {
    task: "Do homework",
    completed: false,
    id: 1,
  },

  {
    task: "Buy Groceries",
    completed: false,
    id: 2,
  },

  {
    task: "Wash Car",
    completed: false,
    id: 3,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    case "DELETE_TODO":
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      <h1>Lambda Todo App</h1>
      <p className='todo'>
      <TodoList todos={state} dispatch={dispatch} />
      </p>
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
