import React from "react";
import Image from "react-bootstrap/Image";
import "./Portfolio.css";
import car from "../assets/carblueprint.png";
import path from "../assets/path.png";
import cash from "../assets/cashguardianimage.png";
import readme from "../assets/readme.png";
import weatherdash from "../assets/weatherdash.png";
import employee from "../assets/employee.png";
import github from "../assets/github-mark.png";

export default function Portfolio() {
  return (
    <section className="container">
      <h1>My Work</h1>
      <div className="row card-container">
        <div className="col-md-9">
          <div className="card text card-margin">
            <Image
              src={path}
              alt="a scenic mountaintop walking path with ocean views"
            />
            <div className="card-img overlay">
              <h5 className="card-title">Weather Expedition</h5>
              <h6 className="card-subtitle">OpenAI</h6>
              <p className="card-text">
                enjoy the 5-day forecast for any city in the narrative-style of
                beloved naturalist David Attenborough
                <br />
                <a
                  href="https://github.com/iamthesaint/weather-expedition"
                  className="card-link github-link"
                >
                  <img src={github} alt="github logo" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text card-margin">
            <Image
              src={cash}
              alt="a coinjar with a plant growing out of it on a wooden table"
            />
            <div className="card-img overlay">
              <h5 className="card-title">Cash Guardian</h5>
              <h6 className="card-subtitle">Chart.js</h6>
              <p className="card-text">
                monitor cashflow to visually simplify savings goals
                <br />
                <a
                  href="https://github.com/iamthesaint/cash-guardian"
                  className="card-link github-link"
                >
                  <img src={github} alt="github logo" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text card-margin">
            <Image
              src={readme}
              alt="a frustrated man in front of a computer with many notes on the wall"
            />
            <div className="card-img overlay">
              <h5 className="card-title">README Creator</h5>
              <h6 className="card-subtitle">Node.js</h6>
              <p className="card-text">
                generate a completely formatted readme.md file from the command
                line
                <br />
                <a
                  href="https://github.com/iamthesaint/readme-creator"
                  className="card-link github-link"
                >
                  <img src={github} alt="github logo" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text card-margin">
            <Image
              src={weatherdash}
              alt="a generic weather forecast screen with a hand reaching out to touch it"
            />
            <div className="card-img overlay">
              <h5 className="card-title">Weather Dashboard</h5>
              <h6 className="card-subtitle">OpenWeatherMap</h6>
              <p className="card-text">
                provides the current weather and 5-day forecast for any city
                <br />
                <a
                  href="https://github.com/iamthesaint/weather-dashboard"
                  className="card-link github-link"
                >
                  <img src={github} alt="github logo" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text card-margin">
            <Image src={employee} alt="icons of people in a man's hands" />
            <div className="card-img overlay">
              <h5 className="card-title">Employee Database</h5>
              <h6 className="card-subtitle">PostgreSQL</h6>
              <p className="card-text">
                monitor and manage employees, roles, and departments in a
                postgresql database
                <br />
                <a
                  href="https://github.com/iamthesaint/employee-database"
                  className="card-link github-link"
                >
                  <img src={github} alt="github logo" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card text card-margin">
            <Image src={car} alt="blueprint of a car" />
            <div className="card-img overlay">
              <h5 className="card-title">Vehicle Builder</h5>
              <h6 className="card-subtitle">Node.js</h6>
              <p className="card-text">
                create and perform actions on various vehicles from the command
                line
                <br />
                <a
                  href="https://github.com/iamthesaint/vehicle-builder"
                  className="card-link github-link"
                >
                  <img src={github} alt="github logo" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
