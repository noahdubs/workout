import React from 'react'

const Jumbotron = ({ user }) => {
    return (
        <div className="jumbotron user-jumbo">
            <h1>{user.name}</h1>
            <h3>{user.username}</h3>
            {/* <img src={user.picture.url} /> */}
        </div>
    )
}

export default Jumbotron 