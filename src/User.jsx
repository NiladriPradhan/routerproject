import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

// const User = ({ match }) => {
//     return (
//         <>
//             <h1> user {match.params.fname} Page </h1>
//         </>
//     );
// };


const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    //     const click = () =>{
    //         alert("You are here");
    //     }
    return (
        <>
            <h1> user {fname} {lname} Page </h1>
            <p>My current location is {location.pathname} </p>
            {location.pathname = ` /user/a/b` ? (
                <button onClick={()=> alert("You are awesome")} >click me </button>
                // <button onClick={click} >click me </button>

            ): null}
        </>
    );
};

export default User;