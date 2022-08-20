import React from "react"

export default function StartBtn(props) {
    
    return (
        <div>
        <h1>Fast and Furious</h1>
        <button onClick={props.clicking} >Start</button>
        </div>
    )
}