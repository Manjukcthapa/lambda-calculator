import React, {useState} from "react";
import "./Number.css";
//import any components needed
import NumberButton from './NumberButton';
import {numbers} from "../../../data.js"

// example of import from data.js. Note all the ../   This is how we move through folders. 
 
//Import your array data to from the provided data file

const Numbers = (props) => {
  {console.log('i am here')}
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div  className="listnumber">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {/* <div > {numbers.map((item,i) => <NumberButton key={i} number={item}/>)}</div> */}
      {numbers.map(number => { 
         return <NumberButton key={number} text={number} addNumber={props.addNumber} />;
       })}
    </div>
  );
};
export default Numbers;