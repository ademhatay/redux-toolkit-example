import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increament,
  decrement,
  increaseByAmount,
} from "./redux/slices/counterSlices";

import {fetchPost} from "./redux/slices/postSlices";

function App() {

  // define Dispatch from react-redux
  const dispatch = useDispatch();

  const counter = useSelector(state => state?.counter);


  // fetch post component created
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  // select state from redux store
  const {postsList, loading} = useSelector(state => state?.post);

  return <>
    <div className="counter">
      <h1>Redux Toolkit Counter</h1>
      <h2>Counter: {counter.value}</h2>
      <button onClick={() => dispatch(increament())} > + </button>
      <button onClick={() => dispatch(decrement())} > - </button>
      <button onClick={() => dispatch(increaseByAmount(20))}>Increase Amount</button>
    </div>
    <br /><br /><hr /><br /><br />
    <div className="post">
      <h1>Redux Toolkit Posts - Thunk</h1>
      <hr />
      { loading ? "loading" : postsList?.map(post => {
        return <>
            <div>{post.title}</div>
            <br /><hr /><br />
        </>
      }) }
    </div>
  </>
}

export default App;
