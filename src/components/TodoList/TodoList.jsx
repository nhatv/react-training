import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";
import TodoItemEdit from "./TodoItemEdit";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [inputEditValue, setInputEditValue] = useState("");
  const [numPendingTasks, setNumPendingTasks] = useState(0);
  const [numCompletedTasks, setNumCompletedTasks] = useState(0);

  const inputRef = useRef(null);

  const handleChange = (event) => {
    // console.log("event", event.target.value);
    setInputValue(event.target.value);
  };

  const handleChangeEdit = (event) => {
    // console.log("event", event.target.value);
    setInputEditValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.focus();

    const newTodoItem = {
      id: uuidv4(),
      title: inputValue,
      isEditing: false,
      isCompleted: false,
    };
    const newTodoList = [...todoList, newTodoItem];
    setTodoList(newTodoList);
    setInputValue("");
    // console.log(newTodoList);
  };

  const handleDelete = (id) => {
    // everything except the target id
    const filteredList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredList);
  };

  const handleEdit = (item) => {
    if (isEditing) {
      // currently editing but clicked edit again
      alert("Save or cancel current task first");
      return;
    }
    const newTodoList = todoList.map((i) => {
      if (i.id === item.id) {
        return { ...i, isEditing: true };
      }
      return i;
    });
    setTodoList(newTodoList);
    setInputEditValue(item.title);
    setIsEditing(true);
    // console.log("i am editing", item.title, item.id);
  };

  const handleSave = (id) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, title: inputEditValue, isEditing: false };
      }
      return item;
    });
    setTodoList(newTodoList);
    setIsEditing(false);
  };

  const handleCancel = (item) => {
    const newTodoList = todoList.map((i) => {
      if (i.id === item.id) {
        return { ...i, id: item.id, title: item.title, isEditing: false };
      }
      return i;
    });
    setTodoList(newTodoList);
    setIsEditing(false);
  };

  const handleToggleCompleted = useCallback(
    (id) => {
      const newTodoList = todoList.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const pendingTodoList = useMemo(
    () => todoList.filter((todo) => !todo.isCompleted),
    [todoList]
  );

  const completedTodoList = useMemo(
    () => todoList.filter((todo) => todo.isCompleted),
    [todoList]
  );

  useEffect(() => setNumPendingTasks(pendingTodoList.length));
  useEffect(() => setNumCompletedTasks(completedTodoList.length));

  return (
    <div className="todo__container">
      <h1>✎To Do List</h1>
      <form action="">
        <input
          value={inputValue}
          onChange={handleChange}
          className="todo__input"
          ref={inputRef}
        />
        <button onClick={handleSubmit} className="todo__button">
          Submit
        </button>
      </form>
      <div className="todo__container-item">
        {pendingTodoList.length > 0 && (
          <h3>Pending Tasks ({numPendingTasks})</h3>
        )}
        <ul>
          {pendingTodoList.map((item) => {
            return item.isEditing ? (
              <TodoItemEdit
                key={item.id}
                item={item}
                inputEditValue={inputEditValue}
                handleChangeEdit={handleChangeEdit}
                handleSave={handleSave}
                handleCancel={handleCancel}
                handleToggleCompleted={handleToggleCompleted}
              />
            ) : (
              <TodoItem
                key={item.id}
                item={item}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleToggleCompleted={handleToggleCompleted}
              />
            );
          })}
        </ul>
      </div>
      <div className="todo__container-item">
        {completedTodoList.length > 0 && (
          <h3>Completed Tasks ({numCompletedTasks})</h3>
        )}
        <ul>
          {completedTodoList.map((item) => {
            return item.isEditing ? (
              <TodoItemEdit
                key={item.id}
                item={item}
                inputEditValue={inputEditValue}
                handleChangeEdit={handleChangeEdit}
                handleSave={handleSave}
                handleCancel={handleCancel}
                handleToggleCompleted={handleToggleCompleted}
              />
            ) : (
              <TodoItem
                key={item.id}
                item={item}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleToggleCompleted={handleToggleCompleted}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
