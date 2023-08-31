import React from 'react';
import Header from "../components/header/header";
import ModelSection1 from "../components/modelSection1/modelSection1";
import ImageBackgroundNoText from "../components/ImageBackgroundNoText/ImageBackgroundNoText";
import InfomationModelSection from "../components/infomationModelSection/infomationModelSection";

function Cybertrack(props) {
   let model_x = [{
        model: 'CyberTrack',
        submodel: 'View inventory',
        value1: '2.3s 0-60',
        score1: 'very fast',
        value2: '2.3s 0-60',
        score2: 'very fast',
        value3: '2.3s 0-60',
        score3: 'very fast',
        value4: '2.3s 0-60',
        score4: 'very fast',
    }]


    return (
        <>
            <Header></Header>
            <div className="con">

                <section className="section">
                    <ModelSection1 data={model_x[0]}></ModelSection1>
                </section>

                <section className="section">
                    <ImageBackgroundNoText backgraundimg='tesla-charger'></ImageBackgroundNoText>
                </section>

                <section className="section">
                    <InfomationModelSection model='CyberTrack' img2='tesla-charger'
                                            descryption1='Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.'
                                            descryption2='Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.'></InfomationModelSection>
                </section>

            </div>
        </>

    );
}

export default Cybertrack;