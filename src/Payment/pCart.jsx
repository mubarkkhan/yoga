import { useCart } from "react-use-cart"

const Pcart = () => {

    const { items,
        isEmpty,
        updateItemQuantity,
        cartTotal}
        = useCart()
    if (isEmpty) {
        return <div className="pcart-main">
            <h3 style={{ fontSize: "20px", color: "#6f5050", textAlign: "center" }}>Oops cart is empty</h3>
            <div className="sub">
                <h3>Total: {cartTotal}</h3>
            </div>
        </div>
    }
    return (
        <>
        <div className="pcart-main">
                {
                    items.map((data) => {
                        return (
                            <>
                            <div key={data.id} className="pcart">
                                    <div className="main-img">
                                        <div className="img">
                                            <img src={data.img} alt="" />
                                            <span>{data.quantity}</span>
                                        </div>
                                        <div className="rup-detail">
                                            <h2>{data.name}</h2>
                                            <p>{data.detail}</p>
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
                <div className="sub">
                    <h3>Total: {cartTotal}</h3>
                </div>
            </div>
        </>
    )
}
export { Pcart }