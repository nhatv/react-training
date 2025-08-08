const SELL = "SELL";

// action creator function
export const sellCar = (id) => {
  return { type: SELL, payload: id };
};
