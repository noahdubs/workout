import React from 'react'

class NewWorkout extends React.Component {
    state = {
        exercises: [],
        addedExercises: []
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

    render() {
        const exercises = this.state.exercises
        const addedExercises = this.state.addedExercises
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
                            <div className="row new-ex-card" key={exercise._id}>
                                <div className="col-md-7">
                                    <h3 className="card-title"><a href={`/exercise/${exercise._id}`}>{exercise.name}</a></h3>
                                </div>
                                <div className="col-md-4">
                                    <img src={exercise.picture.url} className="card-img" />
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
                    <div className="col-md-6 new-ex-right">
                        <h3 className="new-wo-h">Added Exercises</h3>
                        {/* loop thru added exercises */}
                        <form action="/api/workout" method="POST" encType="multipart/form-data">
                            {addedExercises.map(exercise => (
                                <div className="row new-ex-card" key={exercise.id}>
                                    <div className="col-md-6">
                                        <h3 className="card-title"><a href={`/exercise/${exercise.id}`}>{exercise.name}</a></h3>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="exerciseId" value={exercise.id} className="invisible-ex" />
                                        Reps
                                        <input type="number" name="sets" className="reps-sets form-control" />
                                        Sets
                                        <input type="number" name="reps" className="reps-sets form-control" />
                                    </div>
                                </div>
                            ))}
                                <span>
                                    <div className="form-group">
                                        <label for="description">Description
                                            <input type="text" name="description" />
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label for="picture">Picture
                                            <input type="file" name="image" />
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-submit-wo">Submit Workout</button>
                                </span>
                        </form>
                    </div>
                </div>
                <form>
                    
                </form>
                
                {/* 
                <label for="reps">Reps
                    <input type="number" name="sets" className="reps-sets"/>
                </label>
                <label for="sets">Sets 
                    <input type="number" name="sets" className="reps-sets"/> 
                </label> 
                */}
            </div>
        )
    }
}



export default NewWorkout