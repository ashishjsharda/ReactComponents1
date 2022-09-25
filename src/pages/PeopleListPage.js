import React from 'react';
import {PeopleList} from "../PeopleList";
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
];

export const PeopleListPage = () => (
    <>
        <h1>People List Page</h1>
        <PeopleList people={people}/>
    </>
);
