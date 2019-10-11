import React from "react";


const NumberButton = (props) => {
  return (
    <>
    <div className="numberButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button  className="special" onClick={() => props.addNumber(props.text)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.text}
    </button>
    </div>
    </>
  );
};

export default NumberButton;
