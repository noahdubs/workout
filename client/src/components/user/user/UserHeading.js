import React from 'react'
import LoggedIn from './LoggedIn'

const UserHeading = props => {
    return (
        <div className="user-heading">
            <div className="col-sm-4">
                <img className="profile-pic img-fluid" src={props.user.picture.url} alt={props.user.name} />
                
            </div>
            <div className=" col-sm-4">
                <h1 className="user-pro-name">{props.user.name}</h1>
                <a href={`/users/${props.user._id}`} className="user-pro-username">
                    <h3 className="user-pro-username">@{props.user.username}</h3>
                </a>
                <p>{props.user.bio}</p>
            </div>
            <LoggedIn profileOwner={props.user._id}/>
        </div>
        
    )
}

export default UserHeading 