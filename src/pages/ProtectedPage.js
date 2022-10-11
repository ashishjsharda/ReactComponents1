import React  from "react";
import {Navigate} from "react-router-dom";
export const ProtectedPage = () => {
const isAuth=false;
  return isAuth
       ? (
      <h1>Protected Page</h1>
  ) : (
        <Navigate to="/"/>
  );
}