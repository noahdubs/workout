import React from 'react'
import Container from './Container';

class NewExercise extends React.Component {
    state = {
        name: ""
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <Container 
                handleChange={this.handleChange}
            />
        )
    }
}

export default NewExercise