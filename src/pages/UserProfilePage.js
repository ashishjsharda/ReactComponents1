import React,{useState,useEffect} from "react";

export const UserProfilePage = () => {
    const [user,setUser] = useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(user => setUser(user));
    },[]);
    return user ? (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    ) : null;
}