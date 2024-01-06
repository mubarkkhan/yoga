import React, { useEffect, useState } from "react";

function InputApi(){
    const [pin,setpin]=useState("")
    const [pincode,setpincode]=useState([])
    const changepin=(e)=>{
            setpin(e.target.value)
    }
   async function Data(){
    const mydata = await fetch(`https://api.postalpincode.in/pincode/${pin}`)
    const updatedata = await mydata.json()
    setpincode(updatedata)
    }
    useEffect(()=>{
        Data()
    },[pincode])
    const inputclick=()=>{
        if(pin.value == true){
            return("Yay! This pincode is serviceable")
        }
        else if(pin.value == false){
            return("Sorry! We do not deliver to this pincode yet")
        }
        else{
            return("Plz fill the input")
        }
    }
    return(
        <>
        <div className="api-input">
            <input onClick={inputclick} onChange={changepin} type="text" value={pin}/>
            <label>Enter Your Pincode</label>   
        </div>
        <div className="input">
            {
                pincode.map((item)=>{
                    return(
                        <>
                        {item.Status === "Success" ? 
                        <>
                        <p style={{color:"green"}}>Yay! This pincode is serviceable</p>
                        </>:<div className="color-pin">Sorry! We do not deliver to this pincode yet</div>
                             }
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{InputApi}