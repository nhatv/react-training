import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [inputEditValue, setInputEditValue] = useState("");

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
    const newTodoItem = {
      id: uuidv4(),
      title: inputValue,
      isEditing: false,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodoItem);
    setTodoList(newTodoList);
    setInputValue("");
    console.log(newTodoList);
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
    const updatedTodoItem = {
      id: item.id,
      title: item.title,
      isEditing: true,
    };
    const newTodoList = [...todoList];
    const updatedItemIndex = todoList.findIndex((i) => i.id === item.id);
    newTodoList[updatedItemIndex] = updatedTodoItem;
    setTodoList(newTodoList);
    setInputEditValue(item.title);
    setIsEditing(true);
    // console.log("i am editing", item.title, item.id);
  };

  const handleSave = (id) => {
    const updatedTodoItem = {
      id: id,
      title: inputEditValue,
      isEditing: false,
    };
    // create new list and find index to update it in the array
    const newTodoList = [...todoList];
    const updatedItemIndex = todoList.findIndex((i) => i.id === id);
    newTodoList[updatedItemIndex] = updatedTodoItem;
    setTodoList(newTodoList);
    setIsEditing(false);
  };

  const handleCancel = (item) => {
    const oldTodoItem = {
      id: item.id,
      title: item.title,
      isEditing: false,
    };
    const newTodoList = [...todoList];
    const oldItemIndex = todoList.findIndex((i) => i.id === item.id);
    newTodoList[oldItemIndex] = oldTodoItem;
    setTodoList(newTodoList);
    setIsEditing(false);
  };

  return (
    <div className="todo__container">
      <h1>✎To Do List</h1>
      <form action="">
        <input
          value={inputValue}
          onChange={handleChange}
          className="todo__input"
        />
        <button onClick={handleSubmit} className="todo__button">
          Submit
        </button>
      </form>
      <div>
        <ul>
          {todoList.map((item) => {
            return item.isEditing ? (
              <li key={item.id} className="todo__li">
                <input
                  value={inputEditValue}
                  onChange={handleChangeEdit}
                  className="todo__input todo__input-edit"
                />
                <button
                  onClick={() => handleSave(item.id)}
                  className="todo__button"
                >
                  Save
                </button>
                <button
                  onClick={() => handleCancel(item)}
                  className="todo__button"
                >
                  Cancel
                </button>
              </li>
            ) : (
              <li key={item.id} className="todo__li">
                <span>{item.title}</span>
                <button
                  onClick={() => handleEdit(item)}
                  className="todo__button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="todo__button"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
