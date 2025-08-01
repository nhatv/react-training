import { useState } from "react";
import "./App.css";
import EventDemo from "./components/EventDemo";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList/TodoList";
import ClassDemo from "./ClassComponents/ClassDemo";
import CarApp from "./ClassComponents/CarApp";
import CourseImmutability from "../homework/hw4/CourseImmutability";
import HookDemo from "./Components/HookDemo";
import GameBoard from "./Components/TicTacToe/GameBoard";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* <button id="toggle-btn" onClick={() => setShow(!show)}>
        Show Toggle
      </button> */}
      {/* {show && <ClassDemo name={"alice"} age={18} />} */}
      {/* <CarApp /> */}
      {/* <TodoList /> */}
      <GameBoard />
      {/* <CourseImmutability />
      {show && <HookDemo />} */}
    </>
  );
}

export default App;
