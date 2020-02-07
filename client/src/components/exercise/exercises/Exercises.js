import React from 'react'
import Container from './Container'
import Navbar from '../../partials/navbar/Navbar'

class Exercises extends React.Component {
    state = {
        exercises: [],
        search: "",
        foundExercises: []
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

    handleSearch = () => {
        const search = this.state.search
        const exercises = this.state.exercises 
        const foundExercises = []
        exercises.forEach(exercise => {
            const searchString = search.toLocaleLowerCase()
            const name = exercise.name.toLocaleLowerCase()
            if(name.includes(searchString)){
                foundExercises.push(exercise)
            } 
        })
        if(foundExercises.length < 1){
            alert("No exercises found with that name.")
        }
        this.setState({foundExercises: foundExercises})
    }

    handleEnter = event => {
        let button = document.getElementById("all-ex-btn")
        if(event.key === "Enter"){
            button.click()
        }
    }

    render() {
        const foundExercises = this.state.foundExercises
        let exercises = this.state.exercises
        const current = "Exercises"
        if(foundExercises.length > 0) {
            exercises = this.state.foundExercises
        } 
        return (
            <div className="main-div">
                <Navbar current={current} />
                <Container 
                    exercises={exercises}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    search={this.state.search}
                    handleEnter={this.handleEnter}
                />
            </div>
            
        )
    }
}

export default Exercises