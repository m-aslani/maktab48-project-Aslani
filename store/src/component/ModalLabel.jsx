import React from 'react'

 const ModalLabel = ({label,text}) => {
    return (
        <div className="line">
        <label className="line__text">
            <strong>
            {label}
            </strong>
        </label>
        <p className="line__text">{text}</p>
    </div>
    )
}
export default ModalLabel;