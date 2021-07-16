import React from 'react'

 const ModalLabel = ({label,text}) => {
    return (
        <div style={{display:"flex"}}>
        <label>
            <strong>
            {label}
            </strong>
        </label>
        <p>{text}</p>
    </div>
    )
}
export default ModalLabel;