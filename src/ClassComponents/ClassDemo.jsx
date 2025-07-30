import React from "react";

class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.intervalId;

    this.state = {
      counter: 0,
      timer: 0,
    };

    // this.handleAdd = this.handleAdd.bind(this);
  }

  // same as above, shorthand to initialize state
  // state = {
  //   counter: 0,
  // };

  handleAdd = () => {
    // console.log("this", this.state);

    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    //   this.setState({
    //   counter: this.state.counter + 1,
    // });
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    console.log("render");
    // const tog = document.querySelector("#root");
    // console.log("root", tog);
    return (
      <div>
        <h3>Class Counter Demo</h3>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleAdd}>Add 1</button>
        <p>{this.state.timer}</p>
        <ChildComponent name="Alice" />
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    const interval = 1000;
    // const tog = document.querySelector("#root");
    // console.log("root", tog);

    // this.intervalId = setInterval(() => {
    //   console.log("timer is running");
    //   this.setState({
    //     timer: this.state.timer + 1,
    //   });
    // }, interval);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    // console.log(prevState, this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");

    // clearInterval(this.intervalId);
  }
}

export default ClassDemo;

class ChildComponent extends React.Component {
  render(props) {
    console.log("Child component render");

    return <div>{this.props.name}</div>;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.name === nextProps.name && this.state === nextState) {
  //     return false;
  //   }
  //   return true;
  // }
}
