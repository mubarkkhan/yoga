import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import { auth } from "../Email/Email-api";

export const register = async({email,password})=>{
    const res1 = await auth.createUserWithEmailAndPassword(email,password);
    return res1.user;
}

export const login = async({email,password})=>{
    const res2 = await auth.signInWithEmailAndPassword(email,password);
    return res2.user;
}