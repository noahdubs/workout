import React from 'react'


const Breadcrumb = () => {
    return (
        <div className="all-wo-h bread-crumb new-ex-bc">
            <p><a className="bc-before" href="/exercise">
                Exercises
                </a> 
                <i class="fas fa-chevron-right bc-icon"></i>
            </p>
            <p className="bc-active">New exercise</p>
        </div>
    )
}

export default Breadcrumb