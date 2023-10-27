import React from "react";

function Text(props){
    return(
        <>
        <div className="text">
            <h1>{props.text1}</h1>
            <p>{props.text2}</p>
        </div>
        </>
    )
}
export{Text}