import React from "react";
import logoimg from "../Image/logo1.png"
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

function Header(){
    return(
        <>
        <div className="header">
            <div className="back"></div>
            <div className="navbar">
                <div className="icon">
                    <span><AiOutlineMail/></span>
                    <h4>mubarik00251@gmail.com</h4>
                </div>
                <div className="logo">
                    <img src={logoimg} alt="" />
                </div>
                <div className="icon">
                    <span><IoIosCall/></span>
                    <h4>+917737621418</h4>
                </div>
            </div>
        </div>
        </>
    )
}
export{Header}