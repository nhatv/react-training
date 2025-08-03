import React, { Component } from "react";

export default class TodoItemCC extends Component {
  render() {
    const { id, title, isEditing, isCompleted } = this.props.item;
    return (
      <li className="todo__li">
        <span>{title}</span>
        <div className="todo__actions">
          <button
            onClick={() => this.props.handleEdit(this.props.item)}
            className="todo__button"
          >
            Edit
          </button>
          <button
            onClick={() => this.props.handleDelete(id)}
            className="todo__button"
          >
            Delete
          </button>
          <button
            onClick={() => this.props.handleToggleCompleted(id)}
            className="todo__button"
          >
            {isCompleted ? "Move" : "Complete"}
          </button>
        </div>
      </li>
    );
  }
}
