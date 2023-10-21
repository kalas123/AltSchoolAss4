import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import useCounter from "../hooks/useCounter";

const CounterButton = ({ onPress = () => {}, children = [] }) => {
  return (
    <span className="button" onClick={onPress}>
      {children}
    </span>
  );
};
const CounterPage = () => {
  const { increaseCount, decreaseCount, count } = useCounter();
  return (
    <div>
      <p>This is the counter</p>

      <div className="counter-container">
        <CounterButton onPress={decreaseCount}>
          <FaMinus />
        </CounterButton>
        <p className="counter-text">{count}</p>
        <CounterButton onPress={increaseCount}>
          <FaPlus />
        </CounterButton>
      </div>
    </div>
  );
};

export default CounterPage;
