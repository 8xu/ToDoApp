import React from 'react'

const Error = ({ error }) => {
    return (
        <div>
            { error ? <div className="error">An error has occured! {error}</div> : null } 
        </div>
    )
}

export default Error