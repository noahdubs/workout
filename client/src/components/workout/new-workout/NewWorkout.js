import React from 'react'
import AllExercises from './AllExercises'
import AddedExercises from './AddedExercises'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'

class NewWorkout extends React.Component {
    state = {
        exercises: [],
        addedExercises: [],
        search: "",
        foundExercises: []
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
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    handleClick = event => {
        const exerciseId = event.target.attributes.value.value;
        const exerciseName = event.target.attributes.title.value;
        this.setState(prev => {
            const addedExercises = prev.addedExercises.concat({id:exerciseId, name:exerciseName, reps:null, sets:null})
            return{
                addedExercises
            }
        })
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
        this.setState({foundExercises: foundExercises})
        
    }

    render() {
        const addedExercises = this.state.addedExercises
        const foundExercises = this.state.foundExercises

        let exercises = this.state.exercises
        if(foundExercises.length > 0) {
            exercises = this.state.foundExercises
        } 
        return (
            <div className="container wo-div">
                <div className="row">
                    <LeftNavbar />
                    <div className="col-md-9">
                        <div className="row new-ex-row">
                            <AllExercises 
                                    exercises={exercises}
                                    onClick={this.handleClick}
                                    value={this.state.search}
                                    handleSearch={this.handleSearch}
                                    handleChange={this.handleChange}
                                />
                            <AddedExercises addedExercises={addedExercises}/>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}



export default NewWorkout