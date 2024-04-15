// import Myform from "./components/MyFormChallenge"
// import BoxColor from "./components/BoxColor"
import {useRef, useState} from 'react'
import "./App.css"

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function App() {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  return (
    <>
    <h3>Colors</h3>
    <input
      id="color"
      type="text"
      placheholder="escribe un color"
      className="inputClass"
      onChange={()=>setValue(inputRef.current.value)}
      value={value}
      ref={inputRef}
    />


    {colors.map((color,index)=>(
      <h3 
      key={index}
      style={color===value ? { backgroundColor: `${color}`} : {}}>
        {color === value ? `Yes I'm the ${value} color`: `I'm not the ${value} color`}
      </h3>
    )
    )}

    </>
  )
}

export default App


