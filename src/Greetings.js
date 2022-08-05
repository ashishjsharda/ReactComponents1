import React from "react";

export const Greetings =({name,numberofMessages}) =>{

    if(!name) return null;
    let isMorning=(new Date().getHours() <12);
    let greetingHeader=isMorning?<h3>Good Morning {name}</h3>:<h3>Good Evening {name}</h3>;
    return (
        <>{greetingHeader}
            {numberofMessages===0 ?null :<p> You have {numberofMessages} new messages</p>}

        </>
    )
}

