import React, { useState } from 'react'
import '../css/style.css'
const InputBox = (props) => {
    const [inputValue , setinputValue] = useState('')

    const handleChange = (e)=>{
        console.log(e.target.value)
        setinputValue(e.target.value)
      
    }

    const SubmitValue = (e) =>{
        props.add(inputValue)
        setinputValue('')
        e.preventDefault()
    }
  
    return(
        
        <div className='inputForm'>
        <form >
            <input type="text" placeholder="Enter some text" value={inputValue} onChange={handleChange}></input><br></br>
            <button type="submit" onClick={SubmitValue}>Submit</button> 
            <p>{inputValue}</p>
        </form>
        </div>
        
    )
}

export default InputBox