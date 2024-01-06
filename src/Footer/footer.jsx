import React from "react";
import footerlogo from "../Image/logo (1).png"
import { Link } from "react-router-dom";
import payimg from "../Image/pay.png"
import { footerdata1, footerdata2, footerdata3 } from "../Data/data";

function Footer() {
    
    return (
        <>
            <div className="footer">
                <div className="first">
                    <img src={footerlogo} alt="" />
                    <p>Wear the Premium coding tshirts, hoodies and apparals</p>
                </div>
                <div className="second">
                    <h2>Shop</h2>
                    {
                        footerdata1.map((data)=>{
                            return(
                                <>
                                <li id={data.id}><Link to={data.path}>{data.name}</Link></li>
                                </>
                            )
                        })
                    }
                </div>
                <div className="third">
                    <h2>Customer Service</h2>
                    {
                        footerdata2.map((data)=>{
                            return(
                                <>
                                <li id={data.id}><Link to={data.path}>{data.name}</Link></li>
                                </>
                            )
                        })
                    }
                </div>
                <div className="four">
                    <h2>Policy</h2>
                    {
                        footerdata3.map((data)=>{
                            return(
                                <>
                                <li id={data.id}><Link to={data.path}>{data.name}</Link></li>
                                </>
                            )
                        })
                    }
                </div>
                <div className="five">
                    <img src={payimg} alt="" />
                </div>
            </div>
        </>
    )
}
export { Footer }