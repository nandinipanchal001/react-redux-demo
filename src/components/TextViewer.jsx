import React from 'react'

const TextViewer = (props) => {
    return(
        <>
        <div className='data'>
        <h2>{props.inputValue}</h2>
        </div>
        </>
    )
}

export default TextViewer