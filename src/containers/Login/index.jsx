import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';
import './style.css'


const Login = (props) => {
    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/bookingdetails',
        signInOptions: [
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: true
            },
            {
                provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
            },
            {
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
            }
        ]
    }
    return (
        <div className='login-container'>
            <h2>Login to use booking app</h2>
            <br />
            <StyledFirebaseAuth 
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    )
}

export default Login
