import React from 'react';
import './infomationModelSection.css';

function InfomationModelSection(props) {

    const nameImg = props.model;

    const imageMapping = {
        'Model S': require('../../assets/model-s.jpg'),
        'CyberTrack': require('../../assets/cybertruck.jpg'),
        'Model X': require('../../assets/model-x.jpg'),
        // ... add more mappings
    };

    const imgSrc = imageMapping[nameImg];


      const imageMapping2 = {
        'tesla-charger': require('../../assets/tesla-charger.jpg'),
        // ... add more mappings
    };

    const imgSrc2 = imageMapping2[props.img2];

    return (
        <div className='information'>
            <div className="information_item">
                <img src={imgSrc} alt=""/>
                <span>{props.descryption1}</span>
            </div>
            <div className="information_item">
                <img src={imgSrc2} alt=""/>
                <span>{props.descryption2}</span>
            </div>
        </div>
    );
}

export default InfomationModelSection;
