import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterProvider, { CounterContext } from "./context/CounterContext.jsx";
import TodoProvider from "./context/TodoContext.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createContext } from "react";

export const MyStore = createContext(null);

createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <MyStore value={{ store }}>
    <TodoProvider>
      <App />
    </TodoProvider>
  </MyStore>
  // </Provider>
);
