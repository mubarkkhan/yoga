import React, { useState } from "react";
import loginimg from "../Image/codeswearcircle.png"
import 'react-toastify/dist/ReactToastify.css';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import { auth } from "./firebaseApi";
import { toast } from "react-toastify";
import { Footer } from "../Footer/footer";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuScanFace } from "react-icons/lu";

function Login() {

    const [number, setnumber] = useState("+91")
    const [show, setshow] = useState(false)
    const [final, setfinal] = useState("")
    const [otp, setotp] = useState("")

    const Signin = (e) => {
        e.preventDefault();
        if (number === "" || number.length < 10) return;

        let Veriify = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container"
        );
        auth.signInWithPhoneNumber(number, Veriify)
            .then((result) => {
                setfinal(result);
                toast.success("Code Successfully sent to your number")
                setshow(true);
            })
            .catch((err) => {
                toast.error(err);
                window.location.reload()
            });
    }
    console.log(Signin)
    const ValidOtp = () => {
        if (otp === null || final === null) return;
        final
            .confirm(otp)
            .then(() => {
                toast.success("Login Successfully....")
            })
            .catch(() => {
                toast.error("Enter Valid Otp..")
            });
    };
    return (
        <>
        <div className="top-line"></div>
            <div className="login">
                <div className="img">
                    <img src={loginimg} alt="logo" />
                    <h2>Enter your phone number to continue</h2>
                </div>
                <div className="login-sign" style={{ display: !show ? "block" : "none", }}>
                    <div className="number">
                        <input value={number} onChange={(e) => { setnumber(e.target.value) }} type="num" id="phone" placeholder="Enter your 10 digit phone number" />
                    </div>
                    <div id="recaptcha-container"></div>
                    <div className="button">
                        <button onClick={Signin}>Sign in</button>
                    </div>
                    <div className="method">
                        <Link to="/Google"><li><FaGoogle /></li></Link>
                        <Link to="/elogin"><li><MdEmail /></li></Link>
                        <Link to="/face"><li><LuScanFace /></li></Link>
                    </div>
                </div>
                <div className="login-otp" style={{ display: show ? "block" : "none" }}>
                    <input type="text" placeholder="Enter otp" onChange={(e) => { setotp(e.target.value) }} />
                    <br />
                    <br />
                    <button onClick={ValidOtp}>Verify Otp</button>
                </div>
            </div>
            <Footer />
        </>
    )
}
export { Login }