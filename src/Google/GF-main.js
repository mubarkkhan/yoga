import React from "react";
import { auth } from "./GF-api";
import { Glogin } from "./G-login";
import { Home } from "../Home/home"
import { useAuthState } from "react-firebase-hooks/auth";

function MGoogle(){
    const [user] = useAuthState(auth);
    return(
        user ? <Home/> : <Glogin/>
    )
}
export{MGoogle}