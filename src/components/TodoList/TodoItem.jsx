import React from "react";

const TodoItem = (props) => {
  const { id, title, isEditing } = props.item;

  return (
    <li key={id} className="todo__li">
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
          Complete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
