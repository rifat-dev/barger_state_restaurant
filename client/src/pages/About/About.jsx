import React from 'react';
import './about.css'
import aboutImg from '../../assets/hero-2.jpg'

const About = () => {
    return (
        <section className="about-section">
            <div className="container" >
                <div className="row about-row">
                    <div className="about-img col-lg-6">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="about-text col-lg-6">
                        <h6 className="tag">About</h6>
                        <h2 className="title">Welcome to Burger State</h2>
                        <p className="pera">
                            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
