import React, { useEffect, useState } from "react";
import { bestdata } from "../Data/data";

function Bestselling(props){
   
    const [choose,setchoose]=useState(bestdata)
    const [filterr,setfilter]=useState([...choose])
    
    useEffect(()=>{
        if(props.inputvalue !== " "){
            changesearchsys(props.inputvalue)
        }
        else if(props.inputvalue === 0){
            setchoose(choose)
        }
        else{
            setchoose(choose)
        }
    },[props.inputvalue])

    const changesearchsys = (e)=>{
        const getvalue = e;
        const update = choose.filter((filtertem)=>filtertem.detail.toLowerCase().startsWith(getvalue))
        if(getvalue){
            setfilter(update)
        }
        else{
            setfilter(choose)
        }
    }
   
    return(
        <>
        <div className="best">
            <h2>Bestselling Products</h2>
            <div className="best-t-card">
            {
                filterr.map((data)=>{
                    return(
                        <>
                        <div id={data.id} className="best-card">
                            <div className="image-best">
                            <div className="img1">
                                <img src={data.img1} alt="" />
                            </div>
                            <div className="img2">
                            <img src={data.img} alt="" />
                            </div>
                            </div>
                            <h4>{data.name}</h4>
                            <p>{data.detail}</p>
                            <div className="rupee">
                                <div className="one">
                                <li>{data.ricon}</li>
                                <span>{data.Number}</span>
                                </div>
                                <div className="two">
                                <li>{data.ricon}</li>
                                <span>{data.number2}</span>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
            </div>
        </div>
        </>
    )
}
export{Bestselling}