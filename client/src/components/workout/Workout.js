import React from 'react'

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
        console.log(this.state.workout)
        const workout = this.state.workout;

        const exercises = this.state.workout.exercises;

        if(!exercises) {
            return (
                <div class="spinner-border loader" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                
            )
        } else {
            return (
                <div className="container wo-div">
                    <div className="card-body wo-general">
                        <h1 className="card-title">{workout.name}</h1>
                        <p className="card-text">Description</p>
                        <a href={`/users/${workout.author.id}`}><p className="card-text" className="ex-author-link">Created By: {workout.author.name}</p></a>
                    </div>
                    <h1>Exercises</h1>
                    <div className="ex-list">
                        {exercises.map(exercise => (
                            <div key={exercise._id} className="card-body ex-one">
                                <h1 className="card-title">{exercise.name}</h1>
                                <p className="card-text">Description</p>
                                <a href={`/exercise/${exercise._id}`} className="btn ex-btn">See More</a>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        
    }
}

export default Workout 