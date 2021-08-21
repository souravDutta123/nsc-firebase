import React, { useState } from 'react';
import constants from '../../data/constants'
import maleImage from '../../images/male.jpg'
import femaleImage from '../../images/female.png'
import firebase from 'firebase';
import './style.css'
import { Redirect } from 'react-router-dom';


const BookingForm = () => {
    const [hostelType, setHostelType] = useState(null)
    const [hostelFloor, setHostelFloor] = useState(null)
    const [roomNo, setRoomNo] = useState(null)
    const [error, setError] = useState(null)
    const [hasDetails, setHasDetails] = useState(null)

    const createFloors = () => {
        const floors = []
        for (let i = 1; i <= constants.maxHostelFloor; i++) {
            floors.push(
                <div className={'floor-num' + (hostelFloor === i? ' selected ': '')} key={i} onClick={() => setHostelFloor(i)}>
                    {i}
                </div>
            )
        }
        return floors
    }

    const createRooms = () => {
        const rooms = []
        for (let i = 1; i <= constants.totalRoom; i++) {
            rooms.push(
                <div className={'room-num' + (roomNo === i? ' selected': '')} key={i} onClick={() => setRoomNo(i)}>
                    {i}
                </div>
            )
        }
        return rooms
    }

    const onSubmit = () => {
        if (hostelType && hostelFloor && roomNo) {
            const details = {
                hostelType, hostelFloor, roomNo
            }
            localStorage.setItem('booking', JSON.stringify(details))
            setHasDetails(true)
        } else {
            setError(true)
        }
    }

    const logout = () => {
        firebase.auth().signOut()
    }

    if (hasDetails) {
        return (
            <Redirect to='/bookingdetails'/>
        )
    }

    if (error) {
        return (
            <div className='booking-form-error'>
                <div className='error-message'>Some fields are missing.</div>
                <div className='error-clear' onClick={() => setError(null)}>
                    Fill details
                </div>
            </div>
        )
    }

    return (
        <div className='booking-form'>
            <div className='app-header'>
                <button className='logout-btn' onClick={logout}>Logout</button>
            </div>
            <div className='booking-form-part' id='hostel-type'>
                <div className='booking-form-part-label'>Choose hostel building</div>
                <div className='booking-form-part-details hostel-type-details'>
                    <div className={'hostel-type male' + (hostelType === 'male'? 'selected': '')} onClick={() => setHostelType('male')}>
                        <img src={maleImage} alt="" />
                        <div>Boys' hostel</div>
                    </div>
                    <div className={'hostel-type female' + (hostelType === 'female'? 'selected': '')} onClick={() => setHostelType('female')}>
                        <img src={femaleImage} alt="" />
                        <div>Girls' hostel</div>
                    </div>
                </div>
                <a className='next-link' href="#hostel-floor">
                    <button className='next'>Next</button>
                </a>
            </div>
            <div className='booking-form-part' id='hostel-floor'>
                <div className='booking-form-part-label'>Choose hostel floor</div>
                <div className='booking-form-part-details floor-details'>
                    {createFloors()}
                </div>
                <a className='next-link' href="#room-no">
                    <button className='next'>Next</button>
                </a>
            </div>
            <div className='booking-form-part' id='room-no'>
                <div className='booking-form-part-label'>Choose room</div>
                <div className='booking-form-part-details room-details'>
                    {createRooms()}
                </div>
                <div id='submit-form'>
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default BookingForm
