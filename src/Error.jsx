import React from 'react'
import { NavLink } from 'react-router-dom';

const Error = () =>{
return (
    <>
    <h2> 404 Error Page </h2>
    <NavLink to="/" className="Goback"> Go Back </NavLink>
    </>
);
}
export default Error;