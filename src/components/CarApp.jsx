import React, { useEffect } from "react";
import InfoCard from "../ClassComponents/InfoCard";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import useMySelector from "../hooks/useMySelector";
import useMyDispatch from "../hooks/useMyDispatch";

const CarApp = () => {
  const cars = useMySelector((state) => state.cars);
  const dispatch = useMyDispatch();
  console.log(store.getState());

  // useEffect(() => store.subscribe(() => console.log(store.getState())), []);
  return (
    <>
      <h3>Car App</h3>
      <ul className="car-container">
        {cars.map((car) => (
          <InfoCard
            key={car.id}
            car={car}
            handleSell={(id) => dispatch({ type: "SELL", payload: id })}
          />
        ))}
      </ul>
    </>
  );
};

export default CarApp;
