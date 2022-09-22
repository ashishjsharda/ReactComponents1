import React, {useState} from 'react';
import {CounterButton} from "../CounterButton";
import {CongratulationsMessage} from "../CongratulationsMessage";
export const CounterButtonPage = () => {
    const [numberOfClicks,setCount]=useState(0);
    const incrementCount=()=>setCount(numberOfClicks+1);
    const [hideMessage,setHideMessage]=useState(false);
    return (
        <div className="App">
            <header className="App-header">
                {hideMessage ? null : <CongratulationsMessage
                    numberOfClicks={numberOfClicks}
                    threshold={5}
                    onHide={() =>setHideMessage(true)}/>}

                <CounterButton onIncrement={incrementCount} numberOfClicks={numberOfClicks} />
            </header>
        </div>
    );
}