import React from "react";

const TodoItem = (props) => {
  const { id, title, isEditing, isCompleted } = props.item;

  return (
    <li className="todo__li">
      <span>{title}</span>
      <div className="todo__actions">
        <button
          onClick={() => props.handleEdit(props.item)}
          className="todo__button"
        >
          Edit
        </button>
        <button onClick={() => props.handleDelete(id)} className="todo__button">
          Delete
        </button>
        <button
          onClick={() => props.handleToggleCompleted(id)}
          className="todo__button"
        >
          {isCompleted ? "Move" : "Complete"}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
