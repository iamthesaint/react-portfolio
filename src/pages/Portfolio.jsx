import React from 'react';
import weatherImage from "../assets/weather.png"
import Image from 'react-bootstrap/Image';
import './Portfolio.css';

export default function Portfolio() {
    return (
        <section className="container">
            <h1>Portfolio</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card text card-margin">
                        <Image src={weatherImage} alt="man holding weather icons" />
                        <div className="card-img overlay">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">blah blah blah</p>
                            {/* add image here */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text card-margin">
                        <Image src={weatherImage} alt="man holding weather icons" />
                        <div className="card-img overlay">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">blah blah blah</p>
                            {/* add image here */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text card-margin">
                        <Image src={weatherImage} alt="man holding weather icons" />
                        <div className="card-img overlay">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">blah blah blah</p>
                            {/* add image here */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text card-margin">
                        <Image src={weatherImage} alt="man holding weather icons" />
                        <div className="card-img overlay">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">blah blah blah</p>
                            {/* add image here */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}