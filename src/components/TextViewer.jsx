import react from 'react'

export default function TextViewer(props){
    return(
        <>
        <div className='data'>
        <h2>{props.inputValue}</h2>
        </div>
        </>
    )
}