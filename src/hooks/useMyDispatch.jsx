import React, { useContext } from "react";
import { MyStore } from "../main";

const useMyDispatch = () => {
  const { store } = useContext(MyStore);
  return store.dispatch;
};

export default useMyDispatch;
