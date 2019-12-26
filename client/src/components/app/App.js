import React from 'react'

import Navbar from '../partials/navbar/Navbar'
import Footer from '../partials/footer/Footer'

import Landing from '../landing/Landing'
import Register from '../index/register/Register'
import Login from '../index/login/Login'

import User from '../user/user/User'
import UserEdit from '../user/userEdit/UserEdit'

import Workout from '../workout/workout/Workout'
import Workouts from '../workout/workouts/Workouts'
import NewWorkout from '../workout/new-workout/NewWorkout'
import EditWorkout from '../workout/edit/EditWorkout'

import Exercises from '../exercise/exercises/Exercises'
import Exercise from '../exercise/exercise/Exercise'
import NewExercise from '../exercise/newexercise/NewExercise'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



const App = () => {
    return (
        <Router>
            <Navbar /> 
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />

                {/* User routes */}
                <Route path="/users/:userId" exact component={User} />
                <Route path="/users/:userId/edit" exact component={UserEdit} />

                {/* workout routes */}
                <Route path="/workout" exact component={Workouts} />
                <Route path="/workout/new" exact component={NewWorkout} />
                <Route path="/workout/:workoutId" exact component={Workout} />
                <Route path="/workout/:workoutId/edit" exact component={EditWorkout} />

                {/* Exercise routes */}
                <Route path="/exercise" exact component={Exercises} />
                <Route path="/exercise/new" exact component={NewExercise} />
                <Route path="/exercise/:exerciseId" exact component={Exercise} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App