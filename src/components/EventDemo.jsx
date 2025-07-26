import React, { useState } from "react";

const list = ["nhat", "vong", "adam"];

const foo = () => {
  let count = 1;
  count++;
  return count;
};

// let count1 = foo();
// let count2 = foo();
// console.log(count1, count2);

const EventDemo = ({ onClickButton }) => {
  const [count, setCount] = useState(0);

  console.log(
    "Event demo is rendering",
    count,
    document.querySelector("#countSpan")
  );

  const handleParentClick = () => {
    console.log("parent div is clicked");
  };

  const handleClick = (name) => {
    console.log(name, "child button is clicked");
  };

  return (
    // <div onClick={handleParentClick}>
    <div>
      {list.map((name) => {
        return (
          <button
            key={name}
            onClick={() => {
              handleClick(name);
            }}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default EventDemo;
