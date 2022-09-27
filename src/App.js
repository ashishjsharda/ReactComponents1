import './App.css';
import {CounterButton} from "./CounterButton";
import {CongratulationsMessage} from "./CongratulationsMessage";
import React ,{useState} from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {

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

export default App;
