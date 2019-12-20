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
        console.log(this.state)
        return (
            <div className="top-div">
                <h1>New workout page</h1>
                <div>
                    <p>Name of new workout:</p>
                    <input type="text" name="name" />
                    {this.state.exercises.map(item => {
                        return (
                            <div key={item._id}>
                                  <input type="checkbox" name="exerciseId" value={item._id} />
                                  <input type="number" name="sets" />
                                  <input type="number" name="reps" />
                            </div>
                    )})} 
                </div>
            </div>
        )
    }
}

export default NewWorkout