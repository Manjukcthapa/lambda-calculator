import React from "react";

const OperatorsButton = ({operator}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button> {operator} </button>
    </>
  );
};
export default OperatorsButton;