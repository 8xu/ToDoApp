import React from 'react'

const Error = ({ error }) => {
    return (
        <div>
            { error ? <div className="error">The input is already in the list! {error}</div> : null } 
        </div>
    )
}

export default Error