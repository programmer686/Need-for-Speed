import React from "react"
import styles from "./styles.css"
export default function Game(props) {
    return(
        <div>
            <h1 className={styles.gameText}>How fast do you type?</h1>
            <textarea 
            onChange={props.handleChange}
            value={props.text}
            className={styles.typingBox}/>
            <h4>Time remaining {props.time}</h4>
            <h1>Word count: {props.wordCount}</h1>
        </div>
    )
}