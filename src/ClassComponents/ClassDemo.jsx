import React from "react";

class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      counter: 0,
    };

    // this.handleAdd = this.handleAdd.bind(this);
  }

  // same as above, shorthand to initialize state
  // state = {
  //   counter: 0,
  // };

  handleAdd = () => {
    console.log("this", this.state);

    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log("render");
    const tog = document.querySelector("#root");
    console.log("root", tog);
    return (
      <div>
        <h3>Class Counter Demo</h3>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleAdd}>Add 1</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    const tog = document.querySelector("#root");
    console.log("root", tog);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    // console.log(prevState, this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default ClassDemo;
