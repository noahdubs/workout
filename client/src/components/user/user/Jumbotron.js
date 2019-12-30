import React from 'react'
import LoggedIn from './LoggedIn'

const Jumbotron = ({ user }) => {
    return (
        <div className="container user-jumbo">
            <div className="row">
                <div className="col-md-4">
                    <img className="profile-pic img-fluid" src={user.picture.url} alt={user.name} />
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-6">
                    <h1>{user.name}</h1>
                    <h3>@{user.username}</h3>
                    <p className="user-bio">About me:</p>
                    <p>{user.bio}</p>
                    <LoggedIn profileOwner={user._id}/>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron 