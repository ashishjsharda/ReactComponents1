import React from 'react';
import {Greetings} from "../Greetings";

export const HomePage = () => (
    <>
        <h1>Home Page</h1>
        <Greetings name="John" numberofMessages={0}/>
        <Greetings name="Jane" numberofMessages={10}/>
    </>
);