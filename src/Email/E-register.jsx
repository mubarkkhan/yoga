import React, { useState } from "react";
import {register} from "./Email-main"
import { Footer } from "../Footer/footer";
import img from "../Image/codeswearcircle.png"

function ERegister(){
    const [form,setform]=useState({
        email : "",
        password : ""
    })
    const handlesubmit = async (e)=>{
        e.preventDefault()
        await register(form)
    }
    return(
        <>
        <div className="email-register">
            <img src={img} alt="" />
            <form onChange={handlesubmit}>
                <input type="email" placeholder="Enter Your Email" onChange={(e)=>setform({...form , email : e.target.value})}/>
                <br />
                <input type="password" placeholder="Enter Your Password" onChange={(e)=>setform({...form, password : e.target.value})}/>
                <br />
                <button>Submit</button>
            </form>
        </div>
        <Footer/>
        </>
    )
}
export{ERegister}