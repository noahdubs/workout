import React from 'react'
import Search from './Search'
import ShowWorkouts from './ShowWorkouts'
import WorkoutsHeading from './WorkoutsHeading'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'

const WorkoutsContainer = props => {
    const currentPage = "Workouts"
    return (
        <div className="wo-div">
            <div className="row">
                <LeftNavbar 
                    currentPage={currentPage}
                />
                <div className="col-md-10">
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