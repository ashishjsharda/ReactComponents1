import React from 'react';
import './PeopleListItem.css';
export const PeopleListItem=({person}) => (
    <div className="list-item-container">
        <h3>Name : {person.name}</h3>
        <p> Age :{person.age}</p>
        <p> HairColor :{person.hairColor}</p>
    </div>
)