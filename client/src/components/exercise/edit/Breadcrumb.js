import React from 'react'

const Breadcrumb = ({ exercise }) => {
    return (
        <div className="all-wo-h bread-crumb new-ex-bc">
            <p><a className="bc-before" href="/exercise">
                Exercises
                </a> 
                <i class="fas fa-chevron-right bc-icon"></i>
            </p>
            <p><a className="bc-before" href={`/exercise/${exercise._id}`}>
                {exercise.name}
                </a> 
                <i class="fas fa-chevron-right bc-icon"></i>
            </p>
            <p className="bc-active">Edit</p>
        </div>
    )
}


export default Breadcrumb