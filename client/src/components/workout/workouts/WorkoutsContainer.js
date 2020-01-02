import React from 'react'
import Search from './Search'
import ShowWorkouts from './ShowWorkouts'
import WorkoutsHeading from './WorkoutsHeading'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'

const WorkoutsContainer = props => {
    return (
        <div className="container wo-div">
            <div className="row">
                <LeftNavbar />
                <div className="col-md-9 all-wo-col">
                    <Search 
                        value={props.value}
                        onChange={props.onChange}
                        onClick={props.onClick}
                    />
                    <ShowWorkouts workouts={props.workouts} />
                </div>
            </div>
        </div>
    )
}

export default WorkoutsContainer