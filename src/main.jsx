import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterProvider, { CounterContext } from "./context/CounterContext.jsx";
import TodoProvider from "./context/TodoContext.jsx";
import { Provider } from "react-redux";
// import store from "./store/store.js";
import { createContext } from "react";
import todoStore from "./store/todoStore.js";
import rtkTodoStore from "./store/rtkTodoStore.js";
import MyBrowserRouter from "./MyRouter/MyBrowserRouter.jsx";

export const MyStore = createContext(null);

createRoot(document.getElementById("root")).render(
  <MyBrowserRouter>
    <Provider store={rtkTodoStore}>
      {/* // <MyStore value={{ store }}> */}
      {/* <TodoProvider> */}
      <App />
      {/* </TodoProvider> */}
      {/* // </MyStore> */}
    </Provider>
  </MyBrowserRouter>
);
