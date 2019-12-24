import React from 'react'
import Jumbotron from './Jumbotron'
import AllExercises from './AllExercises'

const Container = ({ exercises }) => {
    return (
        <div className="container exs-div">
            <Jumbotron />
            <h1>All Exercises</h1>
            <AllExercises 
                exercises={exercises}
            />
        </div>
    )
}

export default Container 