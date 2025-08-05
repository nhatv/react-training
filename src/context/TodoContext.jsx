import { createContext, useReducer } from "react";

export const TodoContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "SUBMIT":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        inputValue: "",
      };
    case "EDIT":
      return {
        ...state,
        todoList: action.payload.newTodoList,
        inputEditValue: action.payload.item.title,
        isEditing: true,
      };
    case "SAVE":
      return { ...state, todoList: action.payload, isEditing: false };
    case "DELETE":
      return { ...state, todoList: action.payload };
    case "CANCEL":
      return { ...state, todoList: action.payload, isEditing: false };
    case "CHANGE":
      return { ...state, inputValue: action.payload };
    case "CHANGE_EDIT":
      return { ...state, inputEditValue: action.payload };
    case "TOGGLE_COMPLETED":
      return { ...state, todoList: action.payload };
    default:
      return state;
  }
}

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    inputValue: "",
    todoList: [],
    isEditing: false,
    inputEditValue: "",
  });
  return <TodoContext value={{ state, dispatch }}>{children}</TodoContext>;
}

export default TodoProvider;
