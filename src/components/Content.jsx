import '../css/style.css'
import react, { useState } from 'react'
import InputBox from './InputBox'
import TextViewer from './TextViewer'
export default function Content(){
    const [inputValues , setInputValues] = useState([])
    const addValues =(newValue)=>{
        setInputValues((prevValue) =>{
            return [...prevValue,newValue]
        })
    }
    console.log('inside content component',inputValues)
    return(
        <>
        <div className="content">
            <InputBox add={addValues}/>
            { 
                inputValues.map((Item)=>{
                    return(
                        <TextViewer
                         inputValue ={Item}
                        />
                    )
                })
            }
        </div>
        </>
    )
}