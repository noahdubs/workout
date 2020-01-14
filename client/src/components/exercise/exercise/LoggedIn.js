import React from 'react'

class LoggedIn extends React.Component {
    state = {}

    componentDidMount = () => {
        fetch("/api/check")
            .then(res => res.json())
            .then(user => {
                this.setState({user})
            })
    }

    render() {
        const user = this.state.user 
        const exercise = this.props.exercise
        if(!user){
            return (
               <div></div>
            )
        } else if(user._id === exercise.author.id){
            return (
                <div className="ind-wo-edit">
                    <a href={`/exercise/${exercise._id}/edit`} className="btn btn-warning">Edit Exercise</a>
                </div>
               
            )
            
        } else {
            return (
                <div></div>
               
            )
        }
    }
}

export default LoggedIn 