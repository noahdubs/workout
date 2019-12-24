import React from 'react'
import Container from './Container'

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
            <Container 
                exercises={exercises}
            />
        )
    }
}

export default Exercises