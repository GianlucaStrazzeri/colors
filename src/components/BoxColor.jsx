import { useEffect,useRef,useState } from "react";//import UseEffect,useref y useState de react

function boxColor ({color, value}) {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  let [colorBox, setColorBox]= useState("")


  return (
    <>
    <ul>
    {colors.map((color,index)=>(
      <h3 key={index} className={setColorBox}>I'm not a pink color</h3>
    )
    )}
    
    
    </ul>
    
    </> 
  )
  
}
export default boxColor;  
