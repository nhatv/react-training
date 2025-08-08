import React, { useEffect } from "react";
import InfoCard from "../ClassComponents/InfoCard";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import useMySelector from "../hooks/useMySelector";
import useMyDispatch from "../hooks/useMyDispatch";
import { sellCar } from "../actions/cars.actions";
import { sell } from "../slices/rtkCarsSlice";

const CarApp = () => {
  // custom redux hook
  // const cars = useMySelector((state) => state.cars);
  // const dispatch = useMyDispatch();

  const cars = useSelector((state) => state.cars); // use name of carSlice
  const dispatch = useDispatch();

  console.log(cars);

  useEffect(() => {
    dispatch(fetchInitialCarData());
  }, []);
  // useEffect(() => store.subscribe(() => console.log(store.getState())), []);
  return (
    <>
      <h3>Car App</h3>
      <ul className="car-container">
        {cars.map((car) => (
          <InfoCard
            key={car.id}
            car={car}
            handleSell={(id) => dispatch(sell(id))}
          />
        ))}
      </ul>
    </>
  );
};

export default CarApp;
