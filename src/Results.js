import { useState } from 'react';
import './Results.css';

function Results(props) {
  return (
    <>
    <div id='results'>
      <button onClick={()=> {props.setWasSearched(false); props.setDisplayData([])}}>Go Back</button>
    </div>
    </>
  );
}

export default Results;
