import React from "react";

function Poffer(){
    const whatsapp=()=>{
        window.location="https://whatsapp.com"
    }
    return(
        <>
        <div onClick={whatsapp} className="offer">
            <span>LIMITED OFFER</span>
            <h3>Get Flat 10% off on all prepaid orders above ₹249 Use coupon CODESWEAR10</h3>
        </div>
        </>
    )
}
export{Poffer}