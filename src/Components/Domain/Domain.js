import './domain.css';
import React from 'react';

export default function Domain({name, imageUrl}){

    const divStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
    

    return (
        <div className="domain-container" style={divStyle}>
            <p className="domain-name">{name}</p>
        </div>
    )
}