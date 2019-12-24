import React from 'react'
import AllExercises from './AllExercises'
import Search from './Search'

const Container = props => {
    return (
        <div className="container new-ex-div">
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