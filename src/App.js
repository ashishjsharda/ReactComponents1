import './App.css';
import {CounterButton} from "./CounterButton";
import {CongratulationsMessage} from "./CongratulationsMessage";
import React ,{useState} from "react";


const people=[
    {
        name:'Ashish',
        age:40,
        hairColor:'brown'
    },{
        name:'Jack',
        age:42,
        hairColor:'black'

    }
]

function App() {

    const [numberOfClicks,setCount]=useState(0);
    const incrementCount=()=>setCount(numberOfClicks+1);
    return (
        <div className="App">
            <header className="App-header">
                <CongratulationsMessage numberOfClicks={numberOfClicks} threshold={5}/>
                <CounterButton onIncrement={incrementCount} numberOfClicks={numberOfClicks} />
            </header>
        </div>
    );
}

export default App;
