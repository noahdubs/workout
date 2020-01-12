import React from 'react'

const Breadcrumb = ({ exercise }) => {
    return (
        <div className="all-wo-h bread-crumb">
            <p><a className="bc-before" href="/exercise">
                Exercises
                </a> 
                <i class="fas fa-chevron-right bc-icon"></i>
            </p>
            <p className="bc-active">{exercise.name}</p>
        </div>
    )
}


export default Breadcrumb