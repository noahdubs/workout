import React from 'react'

class NewWorkout extends React.Component {
    state = {
        exercises: [],
        exercise: []
    }

    getData = () => {
        fetch("/api/exercise")
            .then(res => res.json())
            .then(exercises => this.setState({exercises}))
    }


    componentDidMount = () => {
        this.getData();
    }

    handleChange = event => {
        console.log(event.target.type)
        const {name, value} = event.target
        this.setState(prev => {
            const exercise = prev.exercise.concat({[name]:value})
            return{
                exercise
            }
        })
    }

    render() {
        const exercises = this.state.exercises
        console.log(this.state)
        return (
            <div className="container new-ex-div">
                <h1 className="add-ex-h">Create New Workout</h1>
                <div className="row">
                    <div className="col-md-6 new-ex-left">
                        <h3 className="">Search For Exercises</h3>
                        <label for="search">
                            <input type="text" name="search" placeholder="search" />
                        </label>
                        {exercises.map(exercise => (
                            <p key={exercise._id}>
                                {exercise.name}
                            </p>
                        ))}
                    </div>
                    <div className="col-md-6 new-ex-right">
                        <h3 className="new-wo-h">Added Exercises</h3>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default NewWorkout