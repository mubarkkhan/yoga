import { useCart } from "react-use-cart"
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = () => {

    const { items,
        removeItem,
        isEmpty,
        updateItemQuantity,
        cartTotal,
        quantity,
        totalUniqueItems, }
        = useCart()
    if (isEmpty) {
        return <div className="cart-main">
            <div className="shopping-button">
                <div className="back-button">
                    <h1>Shopping cart</h1>
                    <button><IoCloseCircleOutline /></button>
                </div>
            </div>
            <h3 style={{ fontSize: "20px", color: "#6f5050", textAlign: "center" }}>Oops cart is empty</h3>
            <div className="del">
                <button className="em-bu">Clear</button>
                <button className="em-ch">Check Out</button>
            </div>
            <div className="sub">
                <h3>Sub Total Price: {cartTotal}</h3>
            </div>
        </div>
    }
    return (
        <>
            <div className="cart-main">
                <h3 className="total">You have total {totalUniqueItems} item</h3>
                <div className="shopping-button">
                    <div className="back-button">
                        <h1>Shopping cart</h1>
                        <button><IoCloseCircleOutline /></button>
                    </div>
                </div>
                {
                    items.map((data) => {
                        return (
                            <>
                            <div key={data.id} className="cart">
                                    <div className="main-img">
                                        <div className="img">
                                            <img src={data.img} alt="" />
                                            <span>{data.quantity}</span>
                                            <button onClick={() => { removeItem(data.id) }}>Remove</button>
                                        </div>
                                        <div className="rup-detail">
                                            <h2>{data.name}</h2>
                                            <p>{data.detail}</p>
                                            <h3>Price: {data.price}</h3>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="-" onClick={() => { updateItemQuantity(data.id, data.quantity - 1) }}>-</button>
                                        <span>{data.quantity}</span>
                                        <button className="+" onClick={() => { updateItemQuantity(data.id, data.quantity + 1) }}>+</button>
                                    </div>
                                </div>                            
                            </>
                        )
                    })
                }
                <div className="del">
                    <button className="del-bu">Clear</button>
                    <Link to="/payment-method"><button className="ch">CheckOut</button></Link>
                </div>
                <div className="sub">
                    <h3>Sub Total Price:{cartTotal}</h3>
                </div>
            </div>
        </>
    )
}
export { Cart }