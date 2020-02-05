import React from 'react'
import Search from './Search'
import ShowWorkouts from './ShowWorkouts'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'

const WorkoutsContainer = props => {
    const currentPage = "Workouts"
    return (
        <div className="wo-div">
            <div className="row all-ex-row">
                <LeftNavbar 
                    currentPage={currentPage}
                />
                <div className="col-md-9 col-lg-10 all-wo-main-col">
                    <Search 
                        value={props.value}
                        onChange={props.onChange}
                        onClick={props.onClick}
                        handleEnter={props.handleEnter}
                    />
                    <ShowWorkouts workouts={props.workouts} />
                </div>
            </div>
        </div>
    )
}

export default WorkoutsContainer