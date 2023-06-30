import React, { useState } from "react";
import { useTheme } from '../Components/utils/global.context'

const Form = () => {
  
  const {theme} = useTheme()
  const [name, setName] = useState()
  const [message,setMessage]=useState()

  const handleSubmit = (e)=>{
    e.preventDefault()

    let re = /\w+\s/g;

    if (re.test(name) && name.length>3 && name.length<150 && !/[0-9]/.test(name)){
      setMessage(`Gracias ${name}, te contactaremos por mail lo antes posible`)
    } else {
        setMessage("Por favor verificá tu información")
    }
    return message
  }


  return (
    <div className={theme.body}>
      <form onSubmit={handleSubmit}>
        <input required type="text" name='name' placeholder="Nombre completo" onChange={(e)=>setName(e.target.value)}/>
        <label > </label>
        <input required type="email" name='email' placeholder="Email"/>
        <label > </label>
        <button type="submit">Enviar</button>
      </form>
      <h3>{message}</h3>
    </div>
  );
};

export default Form;