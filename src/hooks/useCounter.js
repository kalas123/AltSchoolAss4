import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((c) => {
      return c + 1;
    });
  };
  const decreaseCount = () => {
    setCount((c) => {
      if (c === 0) {
        return c;
      }
      return c - 1;
    });
  };

  return {
    increaseCount,
    decreaseCount,
    count
  };
};

export default useCounter;
