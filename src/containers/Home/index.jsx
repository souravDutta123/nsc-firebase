import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Home = () => {
    useEffect(() => {
        axios.get('/api/user').then((response) => {
            console.log(response)
        })
    }, [])
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
