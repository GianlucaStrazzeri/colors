import { useEffect,useRef,useState } from "react";//import UseEffect,useref y useState de react


//Creo una constante Myform
const MyForm=()=> {
const [value,setValue]=useState("")//El valor inicial no debería ser null al ser un formulario sino nos daría error
const inputRef=useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[]);

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
<div>{value}</div>


    
    
    </>
  );
}

export default MyForm;