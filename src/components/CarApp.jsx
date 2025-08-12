import React, { useEffect } from "react";
import InfoCard from "../ClassComponents/InfoCard";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import useMySelector from "../hooks/useMySelector";
import useMyDispatch from "../hooks/useMyDispatch";
import { sellCar } from "../actions/cars.actions";
import { fetchInitialCarData, sell } from "../slices/rtkCarsSlice";

const CarApp = () => {
  // custom redux hook
  // const cars = useMySelector((state) => state.cars);
  // const dispatch = useMyDispatch();

  const { cars, loading } = useSelector((state) => state.cars); // use name of carSlice
  const dispatch = useDispatch();

  console.log(cars);

  useEffect(() => {
    dispatch(fetchInitialCarData());
  }, []);
  // useEffect(() => store.subscribe(() => console.log(store.getState())), []);
  return (
    <div>
      <h3>Car App</h3>
      {loading ? (
        <div>Loading Car Data...</div>
      ) : (
        <ul style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {cars.map((car) => (
            <InfoCard
              key={car.id}
              car={car}
              handleSell={(id) => {
                console.log("handle sell callback");
                // dispatch(sellCar(id)); // action creator
                dispatch(sell(id));
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarApp;
