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

    logout = event => {
        console.log("clicked log out")
        fetch("/api/logout")
            .then(res => res.json())
            .then(user => {
                this.setState({user})
            })
    }

    render() {
        const user = this.state.user;
        if(user) {
            return (
                <ul className="navbar-nav navbar-right r-padding">
                    <li className="nav-item">
                        <a href={`/users/${user._id}`} className="nav-link link-nav"><i className="fas fa-user icon"></i> Profile</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" onClick={this.logout} className="nav-link link-nav"><i className="fas fa-sign-out-alt icon"></i> Logout</a>
                    </li>
                    <div className="hidden-div">
                        <li className="nav-item">
                            <a href="/workout" className="nav-link link-nav"><i class="fas fa-dumbbell"></i> All workouts</a>
                        </li>
                        <li className="nav-item">
                            <a href="/workout/new" className="nav-link link-nav"><i class="fas fa-plus"></i> New workout</a>
                        </li>
                        <li className="nav-item">
                            <a href="/exercise" className="nav-link link-nav"><i class="fas fa-running li-icon"></i> All exercises</a>
                        </li>
                        <li className="nav-item">
                            <a href="/exercise/new" className="nav-link link-nav"><i class="fas fa-plus"></i> New exercise</a>
                        </li>
                    </div>
                </ul>
                
            )
        } else {
            return (
                <ul className="navbar-nav navbar-right r-padding">
                    <li className="nav-item">
                        <a href="/login" className="nav-link link-nav"><i className="fas fa-sign-in-alt icon"></i> Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="/register" className="nav-link link-nav"><i className="fas fa-user-plus icon"></i> Register</a>
                    </li>
                    <div className="hidden-div">
                        <li className="nav-item">
                            <a href="/workout" className="nav-link link-nav"><i class="fas fa-dumbbell coll-icon"></i> All workouts</a>
                        </li>
                        <li className="nav-item">
                            <a href="/workout/new" className="nav-link link-nav"><i class="fas fa-plus coll-icon"></i> New workout</a>
                        </li>
                        <li className="nav-item">
                            <a href="/exercise" className="nav-link link-nav"><i class="fas fa-running coll-icon"></i> All exercises</a>
                        </li>
                        <li className="nav-item">
                            <a href="/exercise/new" className="nav-link link-nav"><i class="fas fa-plus coll-icon"></i> New exercise</a>
                        </li>
                    </div>
                </ul>
                
            )
            
        }
    }
}

export default LoggedIn