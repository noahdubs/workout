import React from 'react'
import WorkoutsContainer from './WorkoutsContainer'
import Navbar from '../../partials/navbar/Navbar'

class Workout extends React.Component {
    state = {
        workouts: [],
        search: "",
        foundWorkouts: []
    }

    componentDidMount = () => {
        fetch("/api/workout")
            .then(res => res.json())
            .then(workouts => this.setState({workouts}))
    }
    
    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name]:value})
    }

    handleSearch = () => {
        const theSearch = this.state.search
        const workouts = this.state.workouts
        const foundWorkouts = []
        workouts.forEach(workout => {
            let name = workout.name.toLowerCase()
            let search = theSearch.toLowerCase();
            if(name.includes(search)){
                foundWorkouts.push(workout)
            }
        })
        if(foundWorkouts.length === 0){
            alert("No workouts found, try again")
        }
        this.setState({foundWorkouts:foundWorkouts})
    }

    render() {
        let workouts = this.state.workouts
        const foundWorkouts = this.state.foundWorkouts
        const current = "Workouts"
        if(foundWorkouts.length > 0){
            workouts = foundWorkouts
        }
        
        return (
            <div className="main-div">
                <Navbar current={current} />
                <WorkoutsContainer 
                    value={this.state.search}
                    onChange={this.handleChange}
                    onClick={this.handleSearch}
                    workouts={workouts}
                />
            </div>
                
        )
        
    }
}

export default Workout