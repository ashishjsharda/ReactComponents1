import React, { useState } from "react";
import { CounterButton } from "../CounterButton";
import{useLocation} from "react-router-dom";
import {parse} from "query-string";
import { CongratulationMessage } from "../CongratulationsMessage";

export const CounterButtonPage = () => {
    //const name = useParams().name;
    const location = useLocation();
    const startingValue = parse(location.search).startingValue || 0;
    const [numberOfClicks, setNumberOfClicks] = useState(0)
    const [hideMessage, setHideMessage] = useState(false)

    const clicksHandler = () => {
        setNumberOfClicks(numberOfClicks + 1)
    }
    return (
        <>
            <h1> Counter button page</h1>
            {
                hideMessage
                    ? null
                    : <CongratulationMessage numberOfClicks={numberOfClicks} threshold={10} onHide={() => {setHideMessage(true)}}/>
            }
            <CounterButton numberOfClicks={numberOfClicks} clicksHandler={clicksHandler}/>

        </>
    )
}