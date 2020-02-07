import React from 'react'
import AllExercises from './AllExercises'
import AddedExercises from './AddedExercises'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'
import Breadcrumb from './Breadcrumb'
import Navbar from '../../partials/navbar/Navbar'

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
        if(foundExercises.length < 1){
            alert("No exercises found")
        }
        this.setState({foundExercises: foundExercises})
        
    }

    handleEnter = event => {
        let button = document.getElementById("new-wo-btn")
        if(event.key === "Enter"){
            button.click()
        }
    }

    render() {
        const addedExercises = this.state.addedExercises
        const foundExercises = this.state.foundExercises
        const currentPage = "NewWorkout"
        let exercises = this.state.exercises
        if(foundExercises.length > 0) {
            exercises = this.state.foundExercises
        } 
        return (
            <div className="main-div">
                <Navbar current={currentPage} />
                <div className="wo-div">
                    <div className="row all-ex-row">
                        <LeftNavbar 
                            currentPage={currentPage}
                        />
                        <div className="col-md-9 col-lg-10 all-wo-main-col">
                            <Breadcrumb />
                            <div className="row all-wo-row">
                                <AddedExercises addedExercises={addedExercises}/>
                                <AllExercises 
                                    exercises={exercises}
                                    onClick={this.handleClick}
                                    value={this.state.search}
                                    handleSearch={this.handleSearch}
                                    handleChange={this.handleChange}
                                    handleEnter={this.handleEnter}
                                />
                            </div>
                                    
                        </div>
                    </div>
                </div>
            </div>
            
        )
        
    }
}



export default NewWorkout