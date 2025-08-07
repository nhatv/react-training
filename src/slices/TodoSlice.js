const todoInitialValue = {
  inputValue: "",
  todoList: [],
  isEditing: false,
  inputEditValue: "",
};

const todoReducer = (state = todoInitialValue, action) => {
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
};

export default todoReducer;
