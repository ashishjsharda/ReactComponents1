import React, { useState } from "react";
import { CounterButton } from "../CounterButton";
import{useParams} from "react-router-dom";
import { CongratulationMessage } from "../CongratulationsMessage";

export const CounterButtonPage = () => {
    const name = useParams().name;
    const [numberOfClicks, setNumberOfClicks] = useState(0)
    const [hideMessage, setHideMessage] = useState(false)

    const clicksHandler = () => {
        setNumberOfClicks(numberOfClicks + 1)
    }
    return (
        <>
            <h1>{name} 's Counter button page</h1>
            {
                hideMessage
                    ? null
                    : <CongratulationMessage numberOfClicks={numberOfClicks} threshold={10} onHide={() => {setHideMessage(true)}}/>
            }
            <CounterButton numberOfClicks={numberOfClicks} clicksHandler={clicksHandler}/>

        </>
    )
}