import React from 'react';
import Header from "../components/header/header";
import teslaVid from '../assets/tesla-vid.mp4';
import HomePageSection from "../components/homePageSection/homePageSection";
import HomePageCar from "../components/homePageCar/homePageCar";

function Homepage(props) {
    return (
        <>
            <Header></Header>
            <div className="con">
                <section className="section">
                <HomePageSection></HomePageSection>
                </section>
                <section className="section">
                    <HomePageCar model='Model S'></HomePageCar>
                </section>
                <section className="section">
                    <HomePageCar model='Model X'></HomePageCar>
                </section>
                <section className="section">
                    <HomePageCar model='CyberTrack'></HomePageCar>
                </section>

            </div>
        </>
    );
}

export default Homepage;