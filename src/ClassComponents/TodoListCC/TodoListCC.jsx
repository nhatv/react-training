import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItemEditCC from "./TodoItemEditCC";
import TodoItemCC from "./TodoItemCC";

export default class TodoListCC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      inputEditValue: "",
      todoList: [],
      isEditing: null,
    };
    this.inputRef = React.createRef(null);
  }

  handleChange = (event) => {
    // console.log("event", event.target.value);
    this.setState({ inputValue: event.target.value });
  };

  handleChangeEdit = (event) => {
    // console.log("event", event.target.value);
    this.setState({ inputEditValue: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.inputRef.current.focus();

    const newTodoItem = {
      id: uuidv4(),
      title: this.state.inputValue,
      isEditing: false,
      isCompleted: false,
    };
    const newTodoList = [...this.state.todoList, newTodoItem];
    this.setState({ todoList: newTodoList, inputValue: "" });
    // console.log(newTodoList);
  };

  handleDelete = (id) => {
    // everything except the target id
    const filteredList = this.state.todoList.filter((todo) => todo.id !== id);
    this.setState({ todoList: filteredList });
  };

  handleEdit = (item) => {
    if (this.state.isEditing) {
      // currently editing but clicked edit again
      alert("Save or cancel current task first");
      return;
    }
    const newTodoList = this.state.todoList.map((i) => {
      if (i.id === item.id) {
        return { ...i, isEditing: true };
      }
      return i;
    });
    this.setState({
      todoList: newTodoList,
      inputEditValue: item.title,
      isEditing: true,
    });
    // console.log("i am editing", item.title, item.id);
  };

  handleSave = (id) => {
    const newTodoList = this.state.todoList.map((item) => {
      if (item.id === id) {
        return { ...item, title: this.state.inputEditValue, isEditing: false };
      }
      return item;
    });
    this.setState({ todoList: newTodoList, isEditing: false });
  };

  handleCancel = (item) => {
    const newTodoList = this.state.todoList.map((i) => {
      if (i.id === item.id) {
        return { ...i, id: item.id, title: item.title, isEditing: false };
      }
      return i;
    });
    this.setState({ todoList: newTodoList, isEditing: false });
  };

  handleToggleCompleted = (id) => {
    const newTodoList = this.state.todoList.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    this.setState({ todoList: newTodoList });
  };

  render() {
    const pendingTodoList = this.state.todoList.filter(
      (todo) => !todo.isCompleted
    );
    const completedTodoList = this.state.todoList.filter(
      (todo) => todo.isCompleted
    );

    const numPendingTasks = pendingTodoList.length;
    const numCompletedTasks = completedTodoList.length;

    return (
      <div className="todo__container">
        <h1>✎To Do List</h1>
        <form action="">
          <input
            value={this.state.inputValue}
            onChange={this.handleChange}
            className="todo__input"
            ref={this.inputRef}
          />
          <button onClick={this.handleSubmit} className="todo__button">
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
                <TodoItemEditCC
                  key={item.id}
                  item={item}
                  inputEditValue={this.state.inputEditValue}
                  handleChangeEdit={this.handleChangeEdit}
                  handleSave={this.handleSave}
                  handleCancel={this.handleCancel}
                  handleToggleCompleted={this.handleToggleCompleted}
                />
              ) : (
                <TodoItemCC
                  key={item.id}
                  item={item}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
                  handleToggleCompleted={this.handleToggleCompleted}
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
                <TodoItemEditCC
                  key={item.id}
                  item={item}
                  inputEditValue={this.state.inputEditValue}
                  handleChangeEdit={this.handleChangeEdit}
                  handleSave={this.handleSave}
                  handleCancel={this.handleCancel}
                  handleToggleCompleted={this.handleToggleCompleted}
                />
              ) : (
                <TodoItemCC
                  key={item.id}
                  item={item}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
                  handleToggleCompleted={this.handleToggleCompleted}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
