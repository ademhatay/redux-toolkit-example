import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increament,
  decrement,
  increaseByAmount,
} from "./redux/slices/counterSlices";


function App() {

  // define Dispatch from react-redux
  const dispatch = useDispatch();

  const counter = useSelector(state => state?.counter);

  return <>
    <h1>Redux Toolkit Counter</h1>
    <h2>Counter: {counter.value}</h2>
    <button onClick={() => dispatch(increament())} > + </button>
    <button onClick={() => dispatch(decrement())} > - </button>
    <button onClick={() => dispatch(increaseByAmount(20))}>Increase Amount</button>
  </>
}

export default App;
