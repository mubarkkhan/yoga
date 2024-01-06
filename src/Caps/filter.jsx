import React, { useState } from "react";
import { FcClearFilters } from "react-icons/fc";
import { filterinputdata, filterinputdatas } from "../Data/data";
import { RxCross2 } from "react-icons/rx";

function Filter(props) {
    const [filterT, setfilterT] = useState(false)
    const [filterr,setfilterr]=useState()
    const filterbu1 = () => {
        setfilterT(true)
    }
    const filterbu2 = () => {
        setfilterT(false)
    }
    const changecard =(e)=>{
        setfilterr(e.target.value)
        props.send(e.target.value)
    }
    return (
        <>
            <div className="f1">
                <button onClick={filterbu1} className={`${(filterT === true) ? "filteron1" : "filteroff1"}`}><FcClearFilters /></button>
            </div>
            <div className={`${(filterT === true) ? "F-open" : "F-close"}`}>

                <div className="filter">
                    <div className="f-icon">
                        <h2>Filters</h2>
                        <div className="f2">
                            <button onClick={filterbu2} className={`${(filterT === false) ? "filteron2" : "filteroff2"}`}><RxCross2 /></button>
                        </div>
                        <li title="Filter"><FcClearFilters /></li>
                    </div>
                    <div className="f-theme-color">
                        <div className="text">
                            <h2>Theme</h2>
                        </div>
                        <div className="f-check">
                            {
                                filterinputdata.map((data) => {
                                    return (
                                        <>
                                            <div className="f-input">
                                                <input type={data.type} id={data.id} />
                                                <label onChange={changecard}>{data.name}</label>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="text">
                            <h2>Color</h2>
                        </div>
                        <div className="f-check">
                            {
                                filterinputdatas.map((data) => {
                                    return (
                                        <>
                                            <div className="f-input">
                                                <input type={data.type} id={data.id} />
                                                <label>{data.name}</label>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="text">
                            <h2>Size</h2>
                        </div>
                        <div className="f-check">
                            <div className="f-input">
                                <input type="checkbox" />
                                <label>L</label>
                            </div>
                        </div>
                    </div>
                    <div className="bu">
                        <button>Apply Filters</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Filter }