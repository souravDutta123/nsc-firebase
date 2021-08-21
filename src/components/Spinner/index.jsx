import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Loader
                type='Puff'
                height={200}
                width={200}
                color={'#3f51b5'}
            />
        </div>

    )
}

export default Spinner
