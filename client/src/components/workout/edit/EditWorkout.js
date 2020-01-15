import React from 'react'
import Container from './Container'
import Loading from '../workout/Loading'
import Navbar from '../../partials/navbar/Navbar'

class EditWorkout extends React.Component {
    state = {
        deleted: []
    }

    componentDidMount = () => {
        fetch(`/api/workout/${this.props.match.params.workoutId}`)
            .then(res => res.json())
            .then(workout => {
                this.setState({ workout })
            })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleClick = event => {
        const exerciseId = event.target.attributes.title.value
        const exercises = this.state.workout.exercises 
        const newState = []
        let deletedWorkout = {}
        let counter = 0
        exercises.forEach(exercise => {
            if(exercise._id._id === exerciseId && counter === 0){
                deletedWorkout = exercise
                counter ++ 
            } else {
                newState.push(exercise)
            }
        });
        this.setState(prev => {
            return {
                workout: {
                    _id: prev.workout._id,
                    exercises: newState
                }
            }
        })
        this.setState(prev => {
            const deleted = prev.deleted.concat({deletedWorkout})
            return {
                deleted
            }
        })
    }

    render() {    
        const workout = this.state.workout
        const current = "EditWorkout"
        if (!workout) {
            return (
                <Loading />
            )
        } else {
            return (
                <div className="main-div">
                    <Navbar current={current} />
                    <Container
                        workout={this.state.workout}
                        handleChange={this.handleChange}
                        handleClick={this.handleClick}
                        deleted={this.state.deleted}
                    />
                </div>
                
            )
        }

    }
}

export default EditWorkout
