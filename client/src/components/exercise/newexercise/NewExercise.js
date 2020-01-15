import React from 'react'
import Container from './Container';
import Navbar from '../../partials/navbar/Navbar'

class NewExercise extends React.Component {
    state = {
        name: ""
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    render() {
        const current = "NewExercise"
        return (
            <div className="main-div">
                <Navbar current={current} />
                <Container 
                    handleChange={this.handleChange}
                />
            </div>
            
        )
    }
}

export default NewExercise