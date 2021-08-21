import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import './style.css'
import Spinner from '../../components/Spinner';

const BookingDetails = () => {
    const [details, setDetails] = useState(null)

    useEffect(() => {
        const foundDetails = localStorage.getItem('booking')
        if (foundDetails)
            setDetails(JSON.parse(foundDetails))
        else
            setDetails('')
    }, [])

    const logout = () => {
        firebase.auth().signOut()
    }

    const clearBooking = () => {
        localStorage.removeItem('booking')
        setDetails('')
    }

    if (details === null) {
        return (
            <Spinner />
        )
    }

    if (!details) {
        return (
            <Redirect to='/booking' />
        )
    }
    return (
        <>
            <div className='app-header'>
                <button className='logout-btn' onClick={logout}>Logout</button>
            </div>
            <table className='booking-details'>
                <tbody>
                    <tr className='details-row'>
                        <td className='details-label'>
                            Hostel Type.
                        </td>
                        <td className='details-value'>
                            {details.hostelType}
                        </td>
                    </tr>
                    <tr className='details-row'>
                        <td className='details-label'>
                            Floor No.
                        </td>
                        <td className='details-value'>
                            {details.hostelFloor}
                        </td>
                    </tr>
                    <tr className='details-row'>
                        <td className='details-label'>
                            Room No.
                        </td>
                        <td className='details-value'>
                            {details.roomNo}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='clear-booking'>
                <button onClick={clearBooking}>Cancel Booking</button>
            </div>
        </>
    )
}

export default BookingDetails
