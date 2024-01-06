import React, {  useState } from "react";
import logoimg from "../Image/logo (1).png"
import { CiSearch } from "react-icons/ci";
import { navbardata } from "../Data/data";
import { IoCartOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/cart";
import { useCart } from "react-use-cart";

function Header(props){
    const {totalUniqueItems}=useCart()
    const dropdowndata=[
        {
            id:1,
            name:"T-Shirts",
            path:"/tshirt"
        },
        {
            id:2,
            name:"Polo Tshirts",
            path:"/tshirt"
        },
        {
            id:3,
            name:"Oversized Tshirts",
            path:"/tshirt"
        }
    ]
    const [carttoggle,setcarttoggle]=useState(false)
    const [search,setsearch]=useState(null)
    const [moon,setmoon]=useState(false)
    const [toggle,settoggle]=useState(false)

    const changevalue = (e)=>{
        setsearch(e.target.value)
        props.send(e.target.value)
    }
    const click1=()=>{
        settoggle(true)
    }
    const click2=()=>{
        settoggle(false)
    }
    const Moon1=()=>{
        setmoon(true)
    }
    const Moon2=()=>{
        setmoon(false)
    }
    const cartclick1 =()=>{
        setcarttoggle(true)
    }
    const cartclick2 =()=>{
        setcarttoggle(false)
    }
    return(
        <>
        <div className="uniq">
                <h1>{totalUniqueItems}</h1>
            </div>
        <div className="Header">
            <div className="t1">
                        <button onClick={click1} className={`${(toggle === true) ? "op1" : "cl1"}`}><IoMenuOutline /></button>
                    </div>
            <div className="first">
            <div className="img">
            <NavLink excat activeClassName="active" to="/home"><img src={logoimg} alt="logo" /></NavLink>
            </div>
            <div className="search-sys">
            <div className="input">
                <input onChange={changevalue} type="text" placeholder="Search From Our 1000+ Deals"/>
            </div>
            <div className="searchbu">
                <button><CiSearch /></button>
            </div>
            </div>
            </div>
            <div className="second">
                <div className={`${(toggle === true) ? "open" : "close"}`}>
                    <div className="t2">
                        <button onClick={click2} className={`${(toggle === false) ? "op2" : "cl2"}`}><GiCrossMark /></button>
                    </div>
            <div className="dropdown-list">
                <select>
                    <optgroup>
                        {
                            dropdowndata.map((data)=>{
                                return(
                                    <>
                                    <option id={data.id}>{data.name}</option>
                                    </>
                                )
                            })
                        }
                    </optgroup>
                </select>
            </div>
            <div className="navbar">
                {
                    navbardata.map((data)=>{
                        return(
                            <>
                            <div className="menu" id={data.id}>
                                <li><NavLink excat activeClassName="active" to={data.path}>{data.name}</NavLink></li>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            </div>
            <div className="icon-list">
                <button className={`${(carttoggle === true) ? "bucarton1" : "bucartoff1"}`} onClick={cartclick1}><IoCartOutline /></button>
                <button className={`${(carttoggle === false) ? "bucarton2" : "bucartoff2"}`} onClick={cartclick2}><IoCartOutline /></button>
                <button className="login"><Link to="/login">Log Out</Link></button>
                <div className={`${(moon === true) ? "mopen" : "mclose"}`}>
                <button onClick={Moon1} className={`${(moon === true) ? "on1" : "off1"}`}><BsMoonStars /></button>
                </div>
                <button onClick={Moon2} className={`${(moon === false) ? "on2" : "off2"}`}><BsMoonStars /></button>
            </div>
            </div>
        </div>
        {/* cart */}
        <div className={`${(carttoggle === true) ? "carton" : "cartoff"}`}>
        <Cart/>
        </div>
        </>
    )
}
export{Header}