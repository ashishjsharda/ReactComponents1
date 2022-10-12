import React, {useEffect} from "react";
import {Navigate,useNavigate } from "react-router-dom";
export const ProtectedPage = () => {
const isAuth=false;
const history = useNavigate();
useEffect(()=>{
if(!isAuth){
history.push("/")
}
});
  return  (
      <h1>Protected Page</h1>
  ) ;
}