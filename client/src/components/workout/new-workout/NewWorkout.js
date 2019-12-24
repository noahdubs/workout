import React from 'react'
import Search from './Search'
import AllExercises from './AllExercises'
import AddedExercises from './AddedExercises'

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
        console.dir(event.target.attributes.title.value) 
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
        const exercises = this.state.exercises
        const addedExercises = this.state.addedExercises
        const foundExercises = this.state.foundExercises

        if(foundExercises.length === 0) {
            return (
                <div className="container new-ex-div">
                    <h1 className="add-ex-h">Create New Workout</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <Search 
                                value={this.state.search}
                                handleSearch={this.handleSearch}
                                handleChange={this.handleChange}
                            />
                            <AllExercises 
                                exercises={exercises}
                                onClick={this.handleClick}
                            />
                        </div>
                            <AddedExercises addedExercises={addedExercises}/>
                    </div>
                </div>
            )
        } else {
            return (
                    <div className="container new-ex-div">
                        <h1 className="add-ex-h">Create New Workout</h1>
                        <div className="row">
                            <div className="col-md-6 new-ex-left">
        
        
        
                                <h3 className="">Search For Exercises</h3>
                                <div className="form-group">
                                    <label for="search">
                                        <input type="text" name="search" placeholder="search" value={this.state.search} onChange={this.handleChange} />
                                    </label>
                                    <button onClick={this.handleSearch}>Search</button>
                                </div>
                                
        
        
        
                                {foundExercises.map(exercise => (
                                    <div className="row new-ex-card" key={exercise._id}>
                                        <div className="col-md-7">
                                            <h3 className="card-title"><a href={`/exercise/${exercise._id}`}>{exercise.name}</a></h3>
                                        </div>
                                        <div className="col-md-4">
                                            {/* <img src={exercise.picture.url} className="card-img" /> */}
                                        </div>
                                        <div className="col-md-1">
                                            <i className="far fa-plus-square" 
                                               onClick={this.handleClick} 
                                               value={exercise._id} 
                                               title={exercise.name}
                                            ></i>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                        <form>
                            
                        </form>
                    </div>
                )
        }
        
    }
}



export default NewWorkout