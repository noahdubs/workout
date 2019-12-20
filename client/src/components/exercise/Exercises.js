import React from 'react'

class Exercises extends React.Component {
    state = {
        exercises: [],
        name: ""
    }

    componentDidMount = () => {
        fetch("/api/exercise")
            .then(res => res.json())
            .then(exercises => this.setState({ exercises }))
    }

    handleChange = event => {
        const { name, value }  = event.target;
        this.setState({[name]:value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const exercise = this.state.name
        console.log(exercise)
        fetch("/api/exercise", {
            method: "POST",
            body: JSON.stringify(exercise),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log("success:", JSON.stringify(response)))
        .catch(error => console.log("error:", error));
    }

    render() {
        const exercises = this.state.exercises;
        return (
            <div>
                <h1>Exercises</h1>
                {exercises.map(exercise => (
                    <li key={exercise._id}>
                        <p>{exercise.name}</p>
                    </li>
                ))}
                <p>Add new exercise</p>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" placeholder="name" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Exercises