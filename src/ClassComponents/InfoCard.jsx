import React, { Component, PureComponent } from "react";
import "./CarApp.css";

// PureComponent: implement a default shouldComponentUpdate method
export default class InfoCard extends PureComponent {
  render() {
    // destructure props
    const { make, quantity, id } = this.props.car;
    return (
      <div className="info-card">
        <div>{make}</div>
        <div>{quantity}</div>
        <button
          onClick={() => {
            this.props.handleSell(id);
          }}
        >
          Sell
        </button>
      </div>
    );
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.car === nextProps.props.car) {
      return false;
    }
    return true;
  }
}
