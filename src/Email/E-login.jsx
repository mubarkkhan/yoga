import React, { useState } from "react";
import { login } from "./Email-main"
import { Link } from "react-router-dom";
import { Footer } from "../Footer/footer";
import img from "../Image/codeswearcircle.png"
import { FaGoogle } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { LuScanFace } from "react-icons/lu";

function Elogin() {
    const [form, setform] = useState({
        email: "",
        password: ""
    })
    const handelsubmit = async (e) => {
        e.preventDefault();
        await login(form)
    }
    return (
        <>
        <div className="top-line"></div>
            <div className="email-login">
                <img src={img} alt="" />
                <form onChange={handelsubmit}>
                    <input type="email" placeholder="Enter Your Email" onChange={(e) => setform({ ...form, email: e.target.value })} />
                    <br />
                    <input type="password" placeholder="Enter Your Password" onChange={(e) => setform({ ...form, password: e.target.value })} />
                    <br />
                    <div className="bu">
                        <button>Submit</button>
                        <Link to="/eregister"> <button>register</button></Link>
                    </div>
                </form>
                <div className="method">
                    <Link to="/"><li><MdContactMail /></li></Link>
                    <Link to="/Google"><li><FaGoogle /></li></Link>
                    <Link to="/face"><li><LuScanFace /></li></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
export { Elogin }