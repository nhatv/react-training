import React, { useContext, useEffect, useState } from "react";
import { MyStore } from "../main";

const useMySelector = (selector) => {
  const { store } = useContext(MyStore);
  const [, setState] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState((prev) => prev + 1); // no meaning, just need to trigger setState
    });

    return unsubscribe;
  }, [store]);
  return selector(store.getState());
};

export default useMySelector;
