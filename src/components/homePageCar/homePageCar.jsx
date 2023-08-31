import React from 'react';
import './homePageCar.css';

function HomePageCar(props) {
    const nameImg = props.model;

    const imageMapping = {
        'Model S': require('../../assets/model-s.jpg'),
        'CyberTrack': require('../../assets/cybertruck.jpg'),
        'Model X': require('../../assets/model-x.jpg'),
        // ... add more mappings
    };

    const imgSrc = imageMapping[nameImg];

    const carStyles = {
        background: `url(${imgSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Center the image within the container
        width: '100vw',
        height: '100vh',
        position: 'relative',
    };

    return (
        <div id={`Model${props.model}`} style={carStyles} className='home_page-section_cars'>
            <div className="overlay_cars">
                <div>
                    <h1>{props.model}</h1>
                    <h5>View inventory</h5>
                </div>
                <div className='overlay_cars__buttons'>
                    <button>Order Now</button>
                    <button>Demo Drive</button>
                </div>
            </div>
        </div>
    );
}

export default HomePageCar;
