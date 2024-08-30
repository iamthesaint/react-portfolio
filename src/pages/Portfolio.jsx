import React from 'react';
import Image from 'react-bootstrap/Image';
import './Portfolio.css';
import car from '../assets/carblueprint.png';
import nature from '../assets/naturewalk.png';
import cash from '../assets/cashguardianimage.png';
import readme from '../assets/readme.png';
import weatherdash from '../assets/weatherf.png';
import employee from '../assets/employee.png';

export default function Portfolio() {
    return (
        <section className="container">
            <h1>Portfolio</h1>
            <div className="row card-container">
                <div className="col-md-9">
                    <div className="card text card-margin">
                        <Image src={nature} alt="a woman walking through the woods with a backpack" />
                        <div className="card-img overlay">
                            <h5 className="card-title">Weather Expedition</h5>
                            <p className="card-text">blah blah blah</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card text card-margin">
                        <Image src={cash} alt="a coinjar with a plant growing out of it" />
                        <div className="card-img overlay">
                            <h5 className="card-title">Cash Guardian</h5>
                            <p className="card-text">blah blah blah</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card text card-margin">
                        <Image src={readme} alt="a frustrated man in front of a computer with many notes on the wall" />
                        <div className="card-img overlay">
                            <h5 className="card-title">README Creator</h5>
                            <p className="card-text">blah blah blah</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card text card-margin">
                        <Image src={weatherdash} alt="split screen of all possible weather conditions" />
                        <div className="card-img overlay">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">blah blah blah</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card text card-margin">
                        <Image src={employee} alt="icons of people in a man's hands" />
                        <div className="card-img overlay">
                            <h5 className="card-title">Employee Database</h5>
                            <p className="card-text">blah blah blah</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card text card-margin">
                        <Image src={car} alt="blueprint of a car" />
                        <div className="card-img overlay">
                            <h5 className="card-title">Vehicle Builder</h5>
                            <p className="card-text">blah blah blah</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}