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

    loadRepsAndSets = () => {
        this.setState(prev => {
            return {
                workout: [

                ]
            }
        })
    }

    render() {
        const workout = this.state.workout;

        const exercises = this.state.workout.id_list;

        console.log(this.state)
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
                        <h1 className="card-title">Workout Name</h1>
                        <p className="card-text">{workout.description}</p>
                        <a href={`/users/${workout.author.id}`}><p className="card-text" className="ex-author-link">Created By: {workout.author.name}</p></a>
                    </div>
                    <h1>Exercises</h1>
                    <div className="ex-list">
                        {exercises.map(exercise => (
                            <div className="row ex-one">
                                <div className="col-md-6">
                                    <div key={exercise._id} className="card-body">
                                        <h1 className="card-title">{exercise.name}</h1>
                                        <p className="card-text">{exercise.description}</p>
                                        <a href={`/exercise/${exercise._id}`} className="btn ex-btn">See More</a>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <h4>{exercise.reps}</h4>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                            
                        ))}
                    </div>
                </div>
            )
        }
        
    }
}

export default Workout 