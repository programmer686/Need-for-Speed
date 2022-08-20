import React, {useState, useEffect} from "react"
import Game from "./Game.js"
import Button from "./StartBtn.js"
import Won from "./Won.js"

function App() {
    const [text, setText] = useState("")
    const [wordCount, setWordCount] = useState(0)
    const [start, setStart] = useState(false)
    const [time, setTime] = useState(10)
    const [result, setResult] = useState(false)

    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
        let wordNum = text.split(" ").length
        setWordCount(wordNum)
    }
    
    function handleClick() {
        setStart(prev => prev ? false : true)
}

    useEffect(() => {
        if (start === true) {
            setTimeout(() => {
            setTime(prev => {
                if (prev > 0) {
        return prev - 1
             } else if (prev === 0){
            setStart(false)
            setResult(true)
}})}, 1000)
        }
    }, [time, start])
  
    
    
    
   

    
    
    const startGame = start ? <Game time={time} wordCount={wordCount} handleChange={handleChange} text={text}/>  : result ? <Won wordCount={wordCount}/> : <Button clicking={handleClick}/>
    
    
    return(
       <div>{startGame} </div>
    )
    
    
    
}

export default App