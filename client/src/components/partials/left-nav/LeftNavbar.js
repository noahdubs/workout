import React from 'react'

const LeftNavbar = () => {
    return (
        <div className="col-md-3">
            <div className="list group" id="navbar-left">
                <li className="list-group-item left-nav-item"><a href="/workout" className="left-nav-link">All workouts</a></li>
                <li className="list-group-item left-nav-item"><a href="/workout/new" className="left-nav-link">Add a new workout</a></li>
                <li className="list-group-item left-nav-item"><a href="/exercise" className="left-nav-link">All exercises</a></li>
                <li className="list-group-item left-nav-item"><a href="/exercise/new" className="left-nav-link">Add a new exercise</a></li>
            </div>
        </div>
    )
}

export default LeftNavbar 