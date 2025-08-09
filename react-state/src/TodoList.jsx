import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), done: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  const today = new Date();
  const day = today.toLocaleDateString("en-US", { weekday: "long" });
  const date = today.getDate();
  const month = today.toLocaleDateString("en-US", { month: "long" });

  let addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4(), done: false },
    ]);
    setNewTodo("");
  };

  let updateTaskVal = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        done: true,
      }))
    );
  };

  let UpperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, task: todo.task.toUpperCase() }
          : todo
      )
    );
  };

  let toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h2>My Day</h2>
        <div className="todo-date">{day}, {date} {month}</div>
      </div>
      <div className="todo-input-row">
        <input
          className="todo-input"
          placeholder="Add a task"
          value={newTodo}
          onChange={updateTaskVal}
        />
        <button className="todo-add-btn" onClick={addNewTask}>+</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              className={todo.done ? "todo-task done" : "todo-task"}
            >
              {todo.task}
            </span>
            <button className="todo-btn" onClick={() => toggleDone(todo.id)}>
              ✓
            </button>
            <button className="todo-btn" onClick={() => deleteTodo(todo.id)}>
              🗑
            </button>
          </li>
        ))}
      </ul>
      <button className="todo-markall-btn" onClick={markAllDone}>
        Mark All Done
      </button>
    </div>
  );
}