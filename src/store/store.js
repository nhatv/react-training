import { combineReducers, createStore } from "redux";
const carInitialValue = [
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
const carReducer = (state = { cars: carInitialValue }, action) => {
  switch (action.type) {
    case "SELL":
      const newState = state.cars.map((car) => {
        if (car.id === action.payload) {
          return { ...car, quantity: car.quantity - 1 };
        }
        return car;
      });
      return { ...state, cars: newState };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ carReducer });

const myCreateStore = (reducer, preloadedState) => {
  const store = {
    state: preloadedState,
    callbackFns: [],
  };

  store.getState = () => store.state;

  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    store.callbackFns.forEach((cb) => cb());
  };

  store.subscribe = (cb) => {
    store.callbackFns.push(cb);

    // unsubscribe
    return () => {
      store.callbackFns.filter((fn) => fn !== cb);
    };
  };

  store.dispatch({ type: "@@INIT" });
  return store;
};

// const store = createStore(rootReducer);
const store = myCreateStore(carReducer);

export default store;
