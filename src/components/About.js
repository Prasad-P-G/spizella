import React from "react";

export default function About() {
  return (
    <>
      <div className="sub-heading">Vision and Mission</div>
      <div className="container flex ">
        <div className="MainContainer">
          <div className="Vision">
            <div className="sub-heading" style={{ color: "black" }}>
              Vision
            </div>
            <p className="visionMission">
              To become a leading provider of security and software solutions,
              ensuring safety and efficiency for businesses worldwide. Our
              vision outlines our services and product's purpose and future
              direction. Our focus is on delivering unparalleled value and
              competitive security and software solutions to growing businesses
            </p>
          </div>
          <div className="visionMission">
            <div className="sub-heading" style={{ color: "black" }}>
              Mission
            </div>
            <p>
              To deliver high-quality, reliable, and innovative products that
              meet the evolving needs of our clients
            </p>
          </div>
          <div className="Achivements">
            <div className="sub-heading" style={{ color: "black" }}>
              Achievements
            </div>
            <ul className="visionMission">
              <li>Innovative Product Development</li>
              <li>Client Base Expansion</li>
              <li>Partnerships with clients world wide</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
