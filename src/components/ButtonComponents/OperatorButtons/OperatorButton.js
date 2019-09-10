import React from "react";
import "./Operator.css";
const OperatorsButton = (props) => {
  return (
    <>
    <div className="operator">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => props.addOperator(props.operator.value)}>{props.operator.char}</button>
      </div>
    </>
  );
};
export default OperatorsButton;