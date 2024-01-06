import React, { useState } from "react";
import { Filter } from "./filter";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { Capscollection } from "./caps-collection";
import { ResFooter } from "../Footer/res-footer";

function Caps(){
    const [value,setvalue]=useState()
    const getinputvalue = (item)=>{
        setvalue(item)
    }
    const [content,setcontent]=useState()
    const getdata = (cont)=>{
        setcontent(cont)
    }
    return(
        <>
        <Header send = {getinputvalue}/>
        <ResFooter/>
        <div className="flex">
        <Filter send = {getdata}/>
        <Capscollection inputvalue = {value} inputvalue2 = {content}/>
        </div>
        <Footer/>
        </>
    )
}
export{Caps}