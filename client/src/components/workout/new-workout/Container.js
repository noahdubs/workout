import React from 'react'
import AllExercises from './AllExercises'

const Container = props => {
    return (
        <div className="new-ex-div">
            <h1 className="add-ex-h">Create New Workout</h1>
            <div className="row">
                <AllExercises 
                    exercises={props.exercises}
                    onClick={props.onClick}
                />
            </div>
        </div>  
    )
}

export default Container