import React from "react";
const OperatorsButton = (props) => {
  return (
    <>
    <div className="operatorButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button  className="operatorbutton" onClick={() => props.addOperator(props.operator.value)}>{props.operator.char}</button>
      </div>
    </>
  );
};
export default OperatorsButton;