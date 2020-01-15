import React from 'react'
import Loading from './Loading'
import WorkoutContainer from './WorkoutContainer'
import Navbar from '../../partials/navbar/Navbar'

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
        const current = "Workout"
        if(!workout.exercises) {
            return (
                <Loading />
            )
        } else {
            return (
                <div className="main-div">
                    <Navbar current={current} />
                    <WorkoutContainer 
                        workout={workout}
                        exercises={exercises}
                    />
                </div>
                
            )
        }
        
    }
}

export default Workout 