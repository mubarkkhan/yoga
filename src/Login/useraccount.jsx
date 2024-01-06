import React from "react";
import { useLocation } from "react-router-dom";

function User(){
    const userdata = useLocation()
    return(
        <>
        <h1>most welcome{userdata.state.length}</h1>
        </>
    )
}
export{User}