import React from 'react'

const Arrow = ({ direction, clickFunction, glyph }) => {
    return (
        <div
            className={ `slide-arrow ${direction}` }
            onClick={ clickFunction }
        >
            <i className={`fas fa-chevron-${direction}`}></i>
        </div>
    )   
}

export default Arrow 