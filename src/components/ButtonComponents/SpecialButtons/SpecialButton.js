import React from "react";

const SpecialButton = ({specials}) => {
  return (
    <>
      <button className="specialsbutton"> {specials}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;