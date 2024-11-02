// src/components/Counter.js
import React  from "react";
import { useSelector, useDispatch } from "react-redux";
// We are using two hooks useSelector and useDispatch hooks
import { increment, decrement } from "../../store/store";

const Counter = () => {

    const count = useSelector((state)=> state.count);
    const dispatch = useDispatch();
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button className ="counts" onClick={() => dispatch(increment())}>Increment</button>
      <button className ="counts" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
    );
};

export default Counter;