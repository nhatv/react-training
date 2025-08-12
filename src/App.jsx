import { useContext, useState } from "react";
import "./App.css";
import EventDemo from "./components/EventDemo";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList/TodoList";
import ClassDemo from "./ClassComponents/ClassDemo";
// import CarApp from "./ClassComponents/CarApp";
import CourseImmutability from "../homework/hw4/CourseImmutability";
import HookDemo from "./Components/HookDemo";
import GameBoard from "./Components/TicTacToe/GameBoard";
import TodoListCC from "./ClassComponents/TodoListCC/TodoListCC";
import { CounterContext } from "./context/CounterContext";
import CarApp from "./Components/CarApp";
import MyRoutes from "./MyRouter/MyRoutes";
import MyRoute from "./MyRouter/MyRoute";
import MyLink from "./MyRouter/MyLink";

function App() {
  const [show, setShow] = useState(true);

  // const counterContext = useContext(CounterContext);
  // console.log(counterContext);

  return (
    <>
      {/* <button id="toggle-btn" onClick={() => setShow(!show)}>
        Show Toggle
      </button> */}
      {/* {show && <ClassDemo name={"alice"} age={18} />} */}
      {/* <CarApp /> */}
      {/* <TodoList /> */}
      {/* <GameBoard /> */}
      {/* <TodoListCC /> */}
      {/* <CourseImmutability /> */}
      {/* {show && <HookDemo />} */}
      {/* <CarApp /> */}
      <nav>
        <MyLink to="/todolist">Todo List</MyLink>
        <MyLink to="/car">Car App</MyLink>
        <MyLink to="/counter">Counter</MyLink>
      </nav>

      <MyRoutes>
        <MyRoute path="/todolist" element={<TodoList />} />
        <MyRoute path="/car" element={<CarApp />} />
        <MyRoute path="/counter" element={<Counter />} />
      </MyRoutes>
    </>
  );
}

export default App;
