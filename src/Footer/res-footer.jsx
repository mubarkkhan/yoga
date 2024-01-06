import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BsMoonStars } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/cart";

function ResFooter() {
    const [rtcart,setrtcart]=useState(false)
    const click1 = ()=>{
        setrtcart(true)
    }
    const click2 = ()=>{
        setrtcart(false)
    }
    return (
        <>
            <div className="res">
                <div className="res-footer">
                    <li><IoMdHome /></li>
                    <li><CiSearch /></li>
                    <button className={`${(rtcart === true) ? "bucarton1" : "bucartoff1"}`} onClick={click1}><IoCartOutline /></button>
                    <button className={`${(rtcart === false) ? "bucarton2" : "bucartoff2"}`} onClick={click2}><IoCartOutline /></button>
                    <li><BsMoonStars /></li>
                    <Link to="/login"><li style={{color:"black"}}><IoPersonCircleOutline /></li></Link>
                </div>
                <div className={`${(rtcart === true) ? "carton" : "cartoff"}`}>
                <Cart/>
                </div>
            </div>
        </>
    )
}
export { ResFooter }