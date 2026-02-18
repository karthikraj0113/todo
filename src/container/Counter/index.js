import React, { useState } from 'react';
import Button from '../../component/button';
import Heading from '../../component/Heading';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../Redux/counter/counter';
export default function Counter() {
    const count = useSelector((state) => state.counter.dummy);
    const dispatch = useDispatch();
    return (
        <div>
            {/* <h1>Count: {count}</h1> */}
            <Heading Heading="Count"  value={count}></Heading>
            {/* <button >Increment</button> */}
            <Button onClick={() => dispatch(increment())} text="Increment"></Button>
            <Button onClick={() => dispatch(decrement())} text="Decrement"></Button>
            <Button onClick={() => dispatch(reset())} text="Reset"></Button>
        </div>
    );
}z