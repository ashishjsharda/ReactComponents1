import './App.css';
import {CounterButton} from "./CounterButton";
import {CongratulationsMessage} from "./CongratulationsMessage";
import {HomePage,CounterButtonPage,PeopleListPage} from "./pages";
import React ,{useState} from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {

    const [numberOfClicks,setCount]=useState(0);
    const incrementCount=()=>setCount(numberOfClicks+1);
    const [hideMessage,setHideMessage]=useState(false);
    return (
        <div className="App">
            <Router>
<Route path="/"> <HomePage/></Route>
            </Router>
        </div>
    );
}

export default App;
