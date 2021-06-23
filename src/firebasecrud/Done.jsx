import React from 'react';
import {Link } from 'react-router-dom';

const Done = () => {
    return (
        <div>
            <br /><br /><br />
            <div className="container mt-5 text-center">
                <h1>Data Submit Done</h1>
               <Link to="/" className="btn btn-success">Back To Home</Link>
            </div>
        </div>
    )
}

export default Done;
