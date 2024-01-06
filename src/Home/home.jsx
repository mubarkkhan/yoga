import React, { useState } from "react";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { Whatsapp } from "../Whatsapp/whatsapp-link";
import UncontrolledExample from "../Slider/bootstrap-slider";
import { Collections } from "../screencomponentes/collections";
import { Theme } from "../screencomponentes/theme";
import { Cards } from "../screencomponentes/cards";
import { Bestselling } from "../screencomponentes/bestselling";
import { ResFooter } from "../Footer/res-footer";

function Home(){
    const [value,setvalue]=useState()
    const getinputvalue = (item)=>{
        setvalue(item)
    }
    return(
        <>
        <Header send = {getinputvalue}/>
        <ResFooter/>
        <Whatsapp/>
        <UncontrolledExample/>
        <Collections/>
        <Theme/>
        <Bestselling inputvalue = {value}/>
        <Cards/>
        <Footer/>
        </>
    )
}
export{Home}