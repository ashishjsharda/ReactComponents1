import React from "react";

export const Greetings =(props) =>{
    console.log(props);
    let isMorning=(new Date().getHours() <12);
    const {name,numberofMessages}=props;
    let greetingHeader=isMorning?<h3>Good Morning {name}</h3>:<h3>Good Evening {name}</h3>;
    return (
        <>{greetingHeader}
            <p> You have {props.numberofMessages} new messages</p>
        </>
    )
}

