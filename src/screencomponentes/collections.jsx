import React from "react";
import { collectiondata } from "../Data/data";
import { Link } from "react-router-dom";

function Collections(){
    
    return(
        <>
        <div className="collection">
            <div className="text">
            <h1>COLLECTIONS</h1>
            </div>
            <div className="card">
                {
                    collectiondata.map((data)=>{
                        return(
                            <>
                            <div className="cards" id={data.id}>
                            <div className="img">
                            <Link to={data.path}><img src={data.img} alt="collection-img" /></Link>
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
export{Collections}