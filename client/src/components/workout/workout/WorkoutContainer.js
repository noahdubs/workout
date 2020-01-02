import React from 'react'
import WorkoutHeading from './WorkoutHeading'
import ExerciseList from './ExerciseList'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'

const WorkoutContainer = props => {
    return (
        <div className="container wo-div">
            <div className="row">
                <LeftNavbar />
                <div className="col-md-9 wo-general">
                    <WorkoutHeading workout={props.workout} />
                    <h3>Exercises</h3>
                    <ExerciseList  exercises={props.exercises} />
                </div>
            </div>
        </div>
    )
}

export default WorkoutContainer 