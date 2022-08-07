import React from 'react';
export const PeopleListItem=({person}) => (
    <div>
        <h3>Name : {person.name}</h3>
        <p> Age :{person.age}</p>
        <p> HairColor :{person.hairColor}</p>
    </div>
)