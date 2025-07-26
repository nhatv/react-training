import { useState } from "react";
import "./App.css";
import EventDemo from "./components/EventDemo";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>To Do List</h1>
      <TodoList />
    </>
  );
}

export default App;
