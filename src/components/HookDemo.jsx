import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CounterContext } from "../context/CounterContext";

const HookDemo = () => {
  const {
    state: { counter, opCount },
    dispatch,
  } = useContext(CounterContext);
  const [toggle, setToggle] = useState(true);

  const handleAdd = () => {
    counterRef.current = counter + 1;
    // setCounter((prev) => prev + 1);
    // setCounter((prev) => prev + 1);
    dispatch({ type: "INCREMENT", payload: 2 });
  };

  // // componentDidMount + componentDidUpdate
  // useEffect(() => {
  //   console.log("in useEffect");
  // });

  // // componentDidMount
  // useEffect(() => {
  //   console.log("in useEffect with empty dependency array");
  // }, []);

  // // componentDidMount + componentDidUpdate only if values in dependency array changes
  // useEffect(() => {
  //   console.log("in useEffect with dependency array");

  //   /**
  //    * initial render -> 1st useEffect
  //    * update -> clean up for the 1st useEffect -> 2nd useEffect
  //    * update -> clean up for the 2st useEffect -> 3rd useEffect
  //    * unmounting -> clean up for the 3rd useEffect
  //    */
  //   return () => {
  //     console.log("clean up for toggle");
  //   };
  // }, [toggle]);

  // // componentWillUnmount
  // useEffect(() => {
  //   const interval = 1000;
  //   const intervalId = setInterval(() => {
  //     console.log("interval is running");
  //   }, interval);
  //   return () => {
  //     // cleanup function
  //     console.log("clean up");
  //     clearInterval(intervalId);
  //   };
  // }, []);

  useEffect(() => {
    const timeout = 2000;
    setTimeout(() => {
      console.log(counterRef.current);
    }, timeout);
  }, []);

  const counterRef = useRef(null);
  console.log(counterRef);
  const inputRef = useRef(null);
  console.log(inputRef);

  const handleToggle = useCallback((value) => {
    setToggle(!value);
    inputRef.current.focus();
  }, []);

  const fnRef = useRef(handleToggle);
  console.log(fnRef.current === handleToggle);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>{counter}</div>
      <div>Num of operations: {opCount}</div>
      <button onClick={handleAdd}>Add 2</button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 3 })}>
        Subtract 3
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <div>Toggle value: {toggle ? "True" : "False"}</div>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default HookDemo;
