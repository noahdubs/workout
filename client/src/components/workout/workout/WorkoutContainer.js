import React from 'react'
import WorkoutHeading from './WorkoutHeading'
import ExerciseList from './ExerciseList'

const WorkoutContainer = props => {
    return (
        <div className="container wo-div">
            <WorkoutHeading workout={props.workout} />
            <h1>Exercises</h1>
            <ExerciseList  exercises={props.exercises} />
        </div>
    )
}

export default WorkoutContainer 