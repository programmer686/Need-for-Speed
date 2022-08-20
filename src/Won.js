import React from "react" 

export default function Won(props) {
    return (
        <div>
        <h1>Time Up!</h1>
        <h4>You typed {props.wordCount} words in 10 seconds</h4>
        <button onClick={() => window.location.reload()}>Play Again!</button>
        </div>
    )
}