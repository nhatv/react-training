import React, { Component } from "react";

export default class TodoItemEditCC extends Component {
  render() {
    const { id, title, isEditing } = this.props.item;
    return (
      <li className="todo__li">
        <input
          value={this.props.inputEditValue}
          onChange={this.props.handleChangeEdit}
          className="todo__input todo__input-edit"
        />
        <div className="todo__actions">
          <button
            onClick={() => this.props.handleSave(id)}
            className="todo__button"
          >
            Save
          </button>
          <button
            onClick={() => this.props.handleCancel(this.props.item)}
            className="todo__button"
          >
            Cancel
          </button>
          <button
            onClick={() => this.props.handleToggleCompleted(id)}
            className="todo__button"
          >
            Complete
          </button>
        </div>
      </li>
    );
  }
}
