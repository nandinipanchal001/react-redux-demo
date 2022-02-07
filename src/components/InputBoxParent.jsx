import React ,{useState} from 'react'
import '../css/style.css'
import InputBox from './InputBox'
import TextViewer from './TextViewer'

const InputBoxParent = () =>{
    const [inputValues , setInputValues] = useState([])
    const addValues =(newValue)=>{
        setInputValues((prevValue) =>{
            return [...prevValue,newValue]
        })
    }
    console.log('inside content component',inputValues)
    return(
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
    )
}

export default InputBoxParent