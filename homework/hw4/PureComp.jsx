import React, { Component, PureComponent } from "react";

export default class PureComp extends Component {
  render() {
    return <div>Hi {this.props.name}</div>;
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.name === nextProps.props.name) {
      return false;
    }
    return true;
  }
}
