import React from "react";

export const Greetings =() =>{
    let isMorning=(new Date().getHours() <12);
    return isMorning?
        (<>
            <h3> Good Morning</h3>
            <p> You have unread new messages</p>
            </>) : (<>
            <h3> Good Evening </h3>
            <p> You have unread new messages</p>
            </>)
}

