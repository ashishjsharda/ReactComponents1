import React from "react";
import { Link } from "react-router-dom";
export const NavBar = () => (
    <ul>
        <li>
            <Link to="/">Home page</Link>
        </li>
        <li>
            <Link to="/counter">Counter Button</Link>
        </li>
        <li>
            <Link to="/people-list">People list </Link>
        </li>
    </ul>
);