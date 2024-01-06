import React from "react";
import { TbHanger } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";

function Cards(){
    const cardsdata = [
        {
            id:1,
            icon:<TbHanger />,
            name:"Premium Tshirts",
            detail:"Our T-Shirts are 100% made of cotton."
        },
        {
            id:2,
            icon:<FaTruckFast />,
            name:"Free Shipping",
            detail:"We ship all over India for FREE."
        },
        {
            id:1,
            icon:<FaRupeeSign />,
            name:"Exciting Offers",
            detail:"We provide amazing offers & discounts on our products."
        }
    ]
    return(
        <>
        <div className="icon-card">
           {
            cardsdata.map((data)=>{
                return(
                    <>
                    <div id={data.id} className="i-card">
                        <li>{data.icon}</li>
                        <h4>{data.name}</h4>
                        <p>{data.detail}</p>
                    </div>
                    </>
                )
            })
           }
        </div>
        </>
    )
}
export{Cards}