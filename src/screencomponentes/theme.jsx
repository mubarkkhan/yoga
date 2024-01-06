import React from "react";
import { themedata } from "../Data/data";

function Theme(){
    
    return(
        <>
        <div className="theme">
            <div className="text">
            <h1>THEME</h1>
            </div>
            <div className="card">
                {
                    themedata.map((data)=>{
                        return(
                            <>
                            <div className="cards">
                            <img id={data.id} src={data.img} alt="collection-img" />
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
export{Theme}