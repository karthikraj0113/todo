import React, { useState } from 'react';
import Button from '../../component/button';
import Heading from '../../component/Heading';
export default function Counter() {
    const [count, setCount] = useState(0);
 
    return (
        <div>
            {/* <h1>Count: {count}</h1> */}
            <Heading Heading="Count"  value={count}></Heading>
            {/* <button >Increment</button> */}
            <Button onClick={() => setCount(count + 1)} text="Increment"></Button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}