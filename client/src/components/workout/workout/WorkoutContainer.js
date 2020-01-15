import React from 'react'
import WorkoutHeading from './WorkoutHeading'
import ExerciseList from './ExerciseList'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'
import Breadcrumb from './Breadcrumb' 

const WorkoutContainer = props => {
    return (
        <div className="wo-div">
            <div className="row all-ex-row">
                <LeftNavbar />
                <div className="col-md-9 col-lg-10 all-wo-main-col">
                    <Breadcrumb workout={props.workout} />
                    <WorkoutHeading workout={props.workout} />
                </div>
            </div>
        </div>
    )
}

export default WorkoutContainer 