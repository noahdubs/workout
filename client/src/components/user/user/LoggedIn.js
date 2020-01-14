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
        const profileOwner = this.props.profileOwner
        if(!user){
            return (
                <div></div>
        )
        }else if(user._id === profileOwner){
            return (
                <div className="col-md-4">
                    <a className="btn user-edit-btn" href={`/users/${user._id}/edit`}>Edit profile <i className="fas fa-user-edit"></i></a>
                    <form action={`/api/users/${user._id}?_method=DELETE`} method="POST">
                        <button className="btn user-edit-btn">Delete profile <i className="fas fa-trash"></i></button>
                    </form>  
                </div>                     
                
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
}

export default LoggedIn 