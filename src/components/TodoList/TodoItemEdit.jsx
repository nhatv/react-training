import React from "react";

const TodoItemEdit = (props) => {
  const { id, title, isEditing } = props.item;

  return (
    <li className="todo__li">
      <input
        value={props.inputEditValue}
        onChange={props.handleChangeEdit}
        className="todo__input todo__input-edit"
      />
      <div className="todo__actions">
        <button onClick={() => props.handleSave(id)} className="todo__button">
          Save
        </button>
        <button
          onClick={() => props.handleCancel(props.item)}
          className="todo__button"
        >
          Cancel
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

export default TodoItemEdit;
