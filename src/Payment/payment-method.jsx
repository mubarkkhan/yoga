import React, { useState } from "react";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { Pcart } from "./pCart";
import { Poffer } from "./Poffer";
import { useCart } from "react-use-cart";
import { MdShoppingBag } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { ResFooter } from "../Footer/res-footer";

function Paymentmethod() {
    const { cartTotal } = useCart()

    const [ischeck,setischeck] = useState(false);
    const Check=()=>{
        setischeck(!ischeck)
    }
    return (
        <>
            <Header />
            <ResFooter/>
            <div className="checkout">
                <h2 style={{ textAlign: "center", marginTop: "1rem", fontWeight: "700" }}>Checkout</h2>
                <h5 style={{ marginTop: "1.3rem", marginLeft: "5px" }}>1. Delivery Details</h5>
                <div className="a-input">
                    <div className="name">
                        <label>Name</label>
                        <br />
                        <input type="text" placeholder="" />
                    </div>
                    <div className="name">
                        <label>Email</label>
                        <br />
                        <input type="email" placeholder="" />
                    </div>
                </div>
                <div className="b-input">
                    <label>Address</label>
                    <br />
                    <input type="text" placeholder="" />
                </div>
                <div className="a-input">
                    <div className="name">
                        <label>Phone Number</label>
                        <br />
                        <input type="tel" placeholder="Your 10 Digit Phone Number" />
                    </div>
                    <div className="name">
                        <label>PinCode(India)</label>
                        <br />
                        <input type="text" placeholder="" />
                    </div>
                </div>
                <div className="a-input">
                    <div className="name">
                        <label>State</label>
                        <br />
                        <input type="text" placeholder="" />
                    </div>
                    <div className="name">
                        <label>District</label>
                        <br />
                        <input type="text" placeholder="" />
                    </div>
                </div>
                <h5 style={{ marginTop: "1.3rem", marginLeft: "5px" }}>2. Review Cart Items & Pay</h5>
                <Pcart />
                <Poffer />
                <div className="promo">
                    <div>

                    </div>
                    {
                        !ischeck && (
                            <div className="p-code">
                        <p>Apply Promo code</p>
                        <input type="text" placeholder="Enter Code (Only Prepaid)" />
                        <button>Apply</button>
                    </div>
                        )
                    }
                </div>
                <div className="cash">
                    <input checked={ischeck} onChange={Check} type="checkbox" />
                    <label><p>Place a Cash on Delivery Order (Coupon code not applicable)</p></label>
                </div>
                <div className="ripiya">
                <span className="b"><MdShoppingBag /></span>
                <h2>Pay</h2>
                <span className="r"><FaRupeeSign /></span>
                <h3>{cartTotal}</h3>
            </div>
            </div>
            <Footer />
        </>
    )
}
export { Paymentmethod }