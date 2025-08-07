const carInitialValue = [
  {
    make: "Toyota",
    quantity: 10,
    id: 1,
  },
  {
    make: "Honda",
    quantity: 10,
    id: 2,
  },
  {
    make: "Nissan",
    quantity: 10,
    id: 3,
  },
];

const carReducer = (state = carInitialValue, action) => {
  console.log("in car reducer");
  switch (action.type) {
    case "SELL":
      const newState = state.map((car) => {
        if (car.id === action.payload) {
          return { ...car, quantity: car.quantity - 1 };
        }
        return car;
      });
      console.log("new state", newState);
      return newState;

    default:
      return state;
  }
};

export default carReducer;
