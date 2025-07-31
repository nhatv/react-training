import React, { Component, PureComponent } from "react";

export default class PureComp extends PureComponent {
  render() {
    return (
      <div>
        Hi {this.props.name}, I don't have to call shouldUpdateComponent anymore
      </div>
    );
  }
}
