import React from 'react'

import Header from '../partials/Header'

import Landing from '../index/Landing'
import Register from '../index/Register'
import Login from '../index/Login'

import Users from '../user/Users'
import User from '../user/User'

import Workout from '../workout/Workout'
import Workouts from '../workout/Workouts'
import NewWorkout from '../workout/NewWorkout'

import Exercises from '../exercise/Exercises'
import Exercise from '../exercise/Exercise'
import NewExercise from '../exercise/NewExercise'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



const App = () => {
    return (
        <Router>
            <Header /> 
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />

                {/* User routes */}
                <Route path="/users" exact component={Users} />
                <Route path="/users/:userId" exact component={User} />

                {/* workout routes */}
                <Route path="/workout" exact component={Workouts} />
                <Route path="/workout/new" exact component={NewWorkout} />
                <Route path="/workout/:workoutId" exact component={Workout} />

                {/* Exercise routes */}
                <Route path="/exercise" exact component={Exercises} />
                <Route path="/exercise/new" exact component={NewExercise} />
                <Route path="/exercise/:exerciseId" exact component={Exercise} />
            </Switch>
        </Router>
    )
}

export default App