import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    // console.log("event", event.target.value);
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoItem = {
      id: uuidv4(),
      title: inputValue,
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

  return (
    <div>
      <form action="">
        <input value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div>
        <ul>
          {todoList.map((item, index) => {
            return (
              <li key={item.id}>
                <span>{item.title}</span>
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
