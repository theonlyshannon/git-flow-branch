import React from 'react'

const Button = () => {
    return (
        <div>
            <button className="btn btn-outline " style={{ margin: '5px' }}>Dashboard</button>
            <button className="btn btn-outline btn-primary" style={{ margin: '5px' }}>About</button>
            <button className="btn btn-outline btn-secondary" style={{ margin: '5px' }}>Blog</button>
            <button className="btn btn-outline btn-accent" style={{ margin: '5px' }}>Contact</button>
        </div>
    )
}

export default Button
