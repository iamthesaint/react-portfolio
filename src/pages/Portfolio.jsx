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
import cashgss from "../assets/cashgss.jpeg";
import readmess from "../assets/readmess.png";
import weatherdashss from "../assets/weatherdashss.png";
import employeess from "../assets/employeess.png";
import vehiclebuildss from "../assets/vehiclebuildss.png";
import weatherexss from "../assets/weatherexss.png";

export default function Portfolio() {
  return (
    <section className="container">
      <h1>Projects</h1>
      <div className="row card-container">
        <div className="col-md-9">
          <div className="card text card-margin">
            <div className="card-images">
              <Image src={path} style={{ height: "700px", width: "100%" }} alt="a scenic mountaintop walking path with ocean views"
              />
              <Image src={weatherexss} alt="a weather expedition screenshot" />
            </div>
\            <div className="card-img overlay">
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
            <div className="card-images">
              <Image
                src={cash}
                alt="a coinjar with a plant growing out of it on a wooden table"
              />
              <Image src={cashgss} alt="a cash guardian screenshot" />
            </div>
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
            <div className="card-images">
              <Image
                src={readme}
                alt="a frustrated man in front of a computer with many notes on the wall"
              />
              <Image src={readmess} alt="a readme creator screenshot" />
            </div>
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
            <Image src={weatherdashss} alt="a weather dashboard screenshot" />
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
            <Image src={employeess} alt="an employee database screenshot" />

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
            <Image src={vehiclebuildss} alt="a vehicle builder screenshot" />

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
