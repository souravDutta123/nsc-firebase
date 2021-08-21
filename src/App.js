import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';

import firebase from 'firebase/app';
import Login from './containers/Login';
import Home from './containers/Home';
import BookingDetails from './containers/BookingDetails';
import BookingForm from './containers/BookingForm';
import Spinner from './components/Spinner';

function App(props) {
    const [isAppInitialized, setIsAppInitialized] = useState(false)
    const [loggedIn, setLoggedIn] = useState(null)
    useEffect(() => {
        if (!firebase.apps.length) {
            const firebaseConfig = {
                apiKey: 'AIzaSyA6UAo4lKKGQYQGbl3KTBlida7FFbQjLLQ',
                authDomain: 'nsc-booking-app.firebaseapp.com',
                projectId: 'nsc-booking-app',
                storageBucket: 'nsc-booking-app.appspot.com',
                messagingSenderId: '449612612071',
                appId: '1:449612612071:web:580700950297e6f6e53d42',
                measurementId: 'G-P04S6E00C8'
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                setIsAppInitialized(true)
            })
            firebase.auth().onAuthStateChanged((user) => {
                if(user) {
                    setLoggedIn(true)
                } else {
                    setLoggedIn(false)
                }
            })
        }
    }, [])

    if (!isAppInitialized || loggedIn === null) {
        return (
            <div>
                <Spinner/>
            </div>
        )
    }

    if (!loggedIn) {
        return (
            <div className='App'>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route render={() => <Redirect to="/" />} />
                    </Switch>
                </Router>
            </div>
        )
    }
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/bookingdetails' component={BookingDetails}></Route>
                    <Route path='/booking' component={BookingForm}></Route>
                    <Route render={() => <Redirect to='/bookingdetails'/>} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
