import { useState } from "react";
import "./App.css";
import EventDemo from "./components/EventDemo";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList/TodoList";
import ClassDemo from "./ClassComponents/ClassDemo";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button id="toggle-btn" onClick={() => setShow(!show)}>
        Toggle Counter
      </button>
      {show && <ClassDemo name={"alice"} age={18} />}
      <TodoList />
    </>
  );
}

export default App;
