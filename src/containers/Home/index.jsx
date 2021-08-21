import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Home = () => {
    return (
        <div>
            <div className='app-hero'>
                This application is to book hostel.
            </div>
            <div>
                <Link to='/login'>
                    <button className='login-btn'>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
