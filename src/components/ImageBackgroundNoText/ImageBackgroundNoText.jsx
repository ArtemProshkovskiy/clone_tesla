import React from 'react';

function ImageBackgroundNoText(props) {

      const imageMapping = {
        'tesla-charger': require('../../assets/tesla-charger.jpg'),
        // ... add more mappings
    };

    const imgSrc = imageMapping[props.backgraundimg];

    const carStyles = {
        background: `url(${imgSrc})`, // Use the '.default' property
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        position: 'relative',
    };

    return (
        <div style={carStyles}></div>
    );
}

export default ImageBackgroundNoText;
