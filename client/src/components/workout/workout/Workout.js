import React from 'react'
import Loading from './Loading'
import WorkoutContainer from './WorkoutContainer'

class Workout extends React.Component {
    state = {
        workout: []
    }

    componentDidMount = () => {
        fetch(`/api/workout/${this.props.match.params.workoutId}`)
            .then(res => res.json())
            .then(workout => {
                this.setState({workout})
            })        
    }


    render() {
        const workout = this.state.workout
        const exercises = this.state.workout.exercises;
        console.log(exercises)
        if(!workout.exercises) {
            return (
                <Loading />
            )
        } else {
            return (
                <WorkoutContainer 
                    workout={workout}
                    exercises={exercises}
                />
            )
        }
        
    }
}

export default Workout 