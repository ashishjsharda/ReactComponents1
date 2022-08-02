import React from "react";

export const Greetings =(props) =>{
    console.log(props);
    let isMorning=(new Date().getHours() <12);
    let greetingHeader=isMorning?<h3>Good Morning {props.name}</h3>:<h3>Good Evening {props.name}</h3>;
    return (
        <>{greetingHeader}
            <p> You have 5 new messages</p>
        </>
    )
}

