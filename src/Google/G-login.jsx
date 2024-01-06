import React from "react";
import { auth, provider } from "./GF-api"
import { Footer } from "../Footer/footer";
import img from "../Image/codeswearcircle.png"
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { LuScanFace } from "react-icons/lu";

function Glogin() {
    const signin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
    return (
        <>
        <div className="top-line"></div>
            <div className="G-button">
                <h1>Google Authentication</h1>
                <img src={img} alt="" />
                <center>
                    <button onClick={signin}>Sign in with google</button>
                </center>
                <div className="method">
                    <Link to="/"><li><MdContactMail /></li></Link>
                    <Link to="/elogin"><li><MdEmail /></li></Link>
                    <Link to="/face"><li><LuScanFace /></li></Link>
                </div>

            </div>
            <Footer />
        </>
    )
}
export { Glogin }