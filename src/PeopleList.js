import React from 'react'
import {PeopleListItem} from "./PeopleListItem";
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
        border: 2px solid #ccc;
        padding: 32px;
        
`
export const PeopleList=({people}) =>(
    <Wrapper>
        {people.map (person =><PeopleListItem person ={person} key={person.name} />)}


        </Wrapper>
);
