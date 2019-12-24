import React from 'react'

const Search = props => {
    return (
        <div className="form-group">
            <input type="text" name="search" value={props.value} onChange={props.onChange} />
            <button className="btn btn-primary" onClick={props.onClick}>Search</button>
        </div>
    )
}

export default Search 