import React from 'react'


const Breadcrumb = ({ workout }) => {
    return (
        <div className="all-wo-h bread-crumb new-ex-bc">
            <p><a className="bc-before" href="/workout">
                Workouts
                </a> 
                <i class="fas fa-chevron-right bc-icon"></i>
            </p>
            <p><a className="bc-before" href={`/workout/${workout._id}`}>
                {workout.name}
                </a> 
                <i class="fas fa-chevron-right bc-icon"></i>
            </p>
            <p className="bc-active">Edit</p>
        </div>
    )
}

export default Breadcrumb