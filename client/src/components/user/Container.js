import React from 'react'
import Jumbotron from './Jumbotron'
import Workouts from './Workouts'

const Container = ({ user }) => {
    return (
        <div className="container user-div">
            <Jumbotron user={user} />
            <h3>Workouts made by {user.name}</h3>
            <Workouts workouts={user.workouts} />
        </div>
    )
}

export default Container 