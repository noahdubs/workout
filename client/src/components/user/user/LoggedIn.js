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
                <div className="user-options">
                    <div className="dropdown user-div-b">
                        <button className="btn btn-secondary dropdown-toggle dropdown-btn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-cog dropdown-btn"></i>
                        </button>
                        <div className="dropdown-menu user-div-b" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href={`/users/${user._id}/edit`}>Edit profile <i className="fas fa-user-edit"></i></a>
                            <form action={`/api/users/${user._id}?_method=DELETE`} method="POST">
                                <button className="dropdown-item">Delete your profile <i className="fas fa-trash"></i></button>
                            </form>  
                        </div>
                    </div>
                    <a className="btn workout-btn user-new-wo" href="/workout/new">Add a new workout <i className="far fa-plus-square"></i></a>
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