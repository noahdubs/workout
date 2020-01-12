import React from 'react'


const Breadcrumb = () => {
    return (
        <div className="all-wo-h bread-crumb">
            <p><a className="bc-before" href="/workout">
                Workouts
                </a> 
                <i class="fas fa-chevron-right bc-icon"></i>
            </p>
            <p className="bc-active">New Workout</p>
        </div>
    )
}

export default Breadcrumb