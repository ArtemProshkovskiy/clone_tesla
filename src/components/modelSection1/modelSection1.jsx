import React from 'react';
import './modelSection1.css'

function ModelSection1(props) {
    const nameImg = props.data.model;

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
        <div id={`Model${props.data.model}`} style={carStyles} className='home_page-section_cars'>
            <div className="overlay_cars">
                <div>
                    <h1>{props.data.model}</h1>
                    <h5>{props.data.submodel}</h5>
                </div>

                <div className='overlay_cars__buttons'>

                    <div className="characteristic">
                        <div>
                            <span>{props.data.value1}</span>
                            <p>
                                {props.data.score1}
                            </p>
                        </div>

                        <div>
                            <span>{props.data.value2}</span>
                            <p>
                                {props.data.score2}
                            </p>
                        </div>

                        <div>
                            <span>{props.data.value3}</span>
                            <p>
                                {props.data.score3}
                            </p>
                        </div>

                        <div>
                            <span>{props.data.value4}</span>
                            <p>
                                {props.data.score4}
                            </p>
                        </div>
                    </div>

                    <button>Order Now</button>
                    <button>Demo Drive</button>
                </div>
            </div>
        </div>
    );
}

export default ModelSection1;