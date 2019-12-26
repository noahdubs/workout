import React from 'react'
import LoggedIn from './LoggedIn'

const Jumbotron = ({ user }) => {
    return (
        <div className="jumbotron user-jumbo">
            <div className="row">
                <div className="col-md-4">
                    <img className="profile-pic" src={user.picture.url} />
                </div>
                <div className="col-md-4">
                    <h1>{user.name}</h1>
                    <h3>{user.username}</h3>
                </div>
               <LoggedIn profileOwner={user._id}/>
            </div>
        </div>
    )
}

export default Jumbotron 