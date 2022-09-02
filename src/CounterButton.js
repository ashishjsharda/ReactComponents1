import React ,{useState}  from "react";
export const CounterButton =() => {
    const [count,setCount]=useState(0);
    const incrementCount=()=>setCount(count+1);
    return (
        <>
            <p>You have clicked the button {count} times</p>
            <button onClick={incrementCount}>Click Me</button>
        </>);
}