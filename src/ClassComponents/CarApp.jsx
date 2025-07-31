import React, { Component } from "react";
import InfoCard from "./InfoCard";
import "./CarApp.css";

const mockCarData = [
  {
    make: "Toyota",
    quantity: 18,
    id: 1,
  },
  {
    make: "Honda",
    quantity: 10,
    id: 2,
  },
  {
    make: "Nissan",
    quantity: 42,
    id: 3,
  },
];

export default class CarApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [...mockCarData],
    };
  }

  handleSell = (id) => {
    const updatedCars = this.state.cars.map((car) => {
      if (car.id === id) {
        return { ...car, quantity: car.quantity - 1 };
      }
      return car;
    });

    this.setState({ cars: updatedCars });
  };

  render() {
    return (
      <>
        <h3>Car App</h3>
        <ul className="car-container">
          {this.state.cars.map((car) => (
            <InfoCard key={car.id} car={car} handleSell={this.handleSell} />
          ))}
        </ul>
      </>
    );
  }
}
