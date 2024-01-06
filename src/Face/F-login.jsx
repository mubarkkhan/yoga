import React, { useEffect } from "react";
import faceIO from "@faceio/fiojs"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdContactMail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Footer } from "../Footer/footer";

function Face() {
    const facenav = useNavigate()
    let faceio;
    useEffect(() => {
        faceio = new faceIO("fioa1909")
    }, [])

    const register = async () => {
        try {
            let facedata = await faceio.enroll({
                locale: "auto",
                payload: {
                    email: "m@gmail.com",
                    pin: 12345
                }
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    const handleclick = async () => {
        try {
            let rrsponse = await faceio.authenticate({
                locale: "auto"
            });
            facenav("/home")
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
        <div className="top-line"></div>
            <div className="f-login">
                <h1>Face recognization...</h1>
                <img src="" alt="" />
                <div className="bu">
                    <button onClick={register}>Register</button>
                    <button onClick={handleclick}>Login</button>
                </div>
                <div className="method">
                        <Link to="/Google"><li><FaGoogle /></li></Link>
                        <Link to="/elogin"><li><MdEmail /></li></Link>
                        <Link to="/"><li><MdContactMail /></li></Link>
                    </div>
            </div>
            <Footer/>
        </>
    )
}
export { Face }