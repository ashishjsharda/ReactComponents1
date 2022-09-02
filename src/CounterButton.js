import React ,{useState}  from "react";
export const CounterButton =() => {
    const [count,setCount]=useState(0);
    return (
        <>
            <p>You have clicked the button {count} times</p>
            <button>Click Me</button>
        </>);
}