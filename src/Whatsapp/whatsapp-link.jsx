import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";

function Whatsapp(){
    const whatsapp=()=>{
        window.location="https://whatsapp.com"
    }
    return(
        <>
        <div onClick={whatsapp} className="whatsapp">
            <span>New</span>
            <h3>Get custom designed products by sending us a text on WhatsApp</h3>
            <li><LiaGreaterThanSolid /></li>
        </div>
        </>
    )
}
export{Whatsapp}