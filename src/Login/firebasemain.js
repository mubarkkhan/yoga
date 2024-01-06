import React from "react";
import { auth } from "./firebaseApi";
import { useAuthState } from "react-firebase-hooks/auth"
import { Login } from "./login";
import { Home } from "../Home/home";

function MainOtp(){
    const [user] = useAuthState(auth)
    return user ? <Home/> : <Login/>
}
export{MainOtp}