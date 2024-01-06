import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { bestdata, capscollectioncarddata } from "../Data/data";
import { Header } from "../Header/header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { InputApi } from "./inputApi";
import ReactImageMagnify from 'react-image-magnify';
import { ResFooter } from "../Footer/res-footer";
import { Bestselling } from "../screencomponentes/bestselling";
import { Footer } from "../Footer/footer";

function Detail(props) {
    
    const { addItem , inCart} = useCart()
    const textdata = [
        {
            id: 1,
            name: "Includes a pack of five high-quality plain caps"
        },
        {
            id: 2,
            name: "Made from durable and breathable materials"
        },
        {
            id: 3,
            name: "Adjustable strap closure for a customized fit"
        },
        {
            id: 4,
            name: "Classic and versatile design suitable for various occasions"
        },
        {
            id: 5,
            name: "Perfect for sun protection and adding style to your outfit"
        }
    ]

    const { ProductId } = useParams()
    const detaildata = capscollectioncarddata.find(item => item.id == ProductId)
    const [img, setimg] = useState(detaildata.img)
    const changeimg = (e) => {
        setimg(e)
    }
    const [choose,setchoose]=useState(bestdata)
    const [filterr,setfilterr]=useState([...choose])
    const changebestsearch = (e)=>{
        const getvalue = e;
        const updatevalue = filterr.filter((filteritem)=> filteritem.detail.toLowerCase().includes(getvalue))
        if(getvalue){
            setfilterr(updatevalue)
        }
        else{
            setfilterr(choose)
        }
    }
    useEffect(()=>{
        if(props.inputvalue !== " "){
            changebestsearch(props.inputvalue)
        }
        else if(props.inputvalue === 0){
            setchoose(choose)
        }
        else{
            setchoose(choose)
        }
    },[props.inputvalue])
    const [search,setsearch]=useState()
    const getinputvalue = (item)=>{
        setsearch(item)
    }
    return (
        <>
            <Header send = {getinputvalue}/>
            <ResFooter/>
            <div key={detaildata.id} className="detail">
                <div className="images">
                    <button onClick={() => { changeimg(detaildata.img) }}><img src={detaildata.img} alt="" /></button>
                    <button onClick={() => { changeimg(detaildata.img1) }}><img src={detaildata.img1} alt="" /></button>
                </div>
                <div className={`${img} image`}>
                    <div className="mag-img">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: img
                            },
                            largeImage: {
                                src: img,
                                width: 1200,
                                height: 1800
                            }
                        }} />
                    </div>
                </div>
                <div className="text">
                    <div className="text1">
                        <h4>CodesWear</h4>
                        <h1>Pack Of Five Plain Cap (L/Black)</h1>
                        <h3>Product Description:</h3>
                        <p>Elevate your style and protect yourself from the sun with the "Pack Of Five Plain Cap". This versatile pack includes five high-quality caps in classic and neutral colors. Each cap is designed for comfort and functionality, making them perfect for various occasions. The caps are made from durable and breathable materials, ensuring a comfortable fit during hot days. With their adjustable strap closure, these caps can be customized to fit your head perfectly. The plain and minimalist design makes them easy to pair with a wide range of outfits, from casual to sporty. Whether you're heading to the beach, going for a run, or simply want to add a stylish touch to your ensemble, these caps have got you covered. Protect your face from the sun's rays and add a finishing touch to your look with the "Pack Of Five Plain Cap".

                        </p>
                        <h5>Product Highlights:</h5>
                    </div>
                    <div className="text2">
                        {
                            textdata.map((data) => {
                                return (
                                    <>
                                        <div key={data.id} className="map">
                                            <div className="khali"></div>
                                            <li>{data.name}</li>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="tag">
                        <div className="text">
                            <h4>Tags:</h4>
                            <p>plain cap, pack of five, versatile, sun protection, classic design, adjustable strap</p>
                        </div>
                        <h3>Color:Black</h3>
                        <img src={detaildata.img} alt="" />
                        <div className="size">
                            <h6>Size:</h6>
                            <li>L</li>
                        </div>
                        <div className="border-bottum"></div>
                    </div>
                    <div className="price">
                        <div className="rupee">
                            <div className="rup">
                                <div className="one">
                                    <li>{detaildata.ricon}</li>
                                    <span>{detaildata.price}</span>
                                </div>
                                <div className="two">
                                    <li>{detaildata.ricon}</li>
                                    <span>{detaildata.price2}</span>
                                </div>
                            </div>
                            <div className="text">
                                <p>(Free shipping)</p>
                            </div>
                        </div>
                        <InputApi />
                        <div className="button">
                            <Link to="/login"><button>Buy Now</button></Link>
                            {inCart (detaildata.id) ? <button>Added</button> : <button onClick={() => { addItem(detaildata) }}>Add to Cart</button>}
                        </div>
                    </div>
                </div>
            </div>
            <Bestselling inputvalue = {search}/>
            <Footer/>
        </>
    )
}
export { Detail }