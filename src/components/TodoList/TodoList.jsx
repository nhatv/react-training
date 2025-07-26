import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
    item.isEditing = true;
    setInputEditValue(item.title);
    setIsEditing(true);
    // console.log("i am editing", item.title, item.id);
  };

  const handleSave = (item) => {
    const updatedTodoItem = {
      id: item.id,
      title: inputEditValue,
      isEditing: false,
    };
    // create new list and find index to update it in the array
    const newTodoList = [...todoList];
    const updatedItemIndex = todoList.findIndex((i) => i.id === item.id);
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
    <div>
      <form action="">
        <input value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div>
        <ul>
          {todoList.map((item) => {
            return item.isEditing ? (
              <li key={item.id}>
                <input value={inputEditValue} onChange={handleChangeEdit} />
                <button onClick={() => handleSave(item)}>Save</button>
                <button onClick={() => handleCancel(item)}>Cancel</button>
              </li>
            ) : (
              <li key={item.id}>
                <span>{item.title}</span>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
