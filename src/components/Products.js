import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";

export default function Products() {
  return (
    // <div>
    //   <h2 style={{ fontWeight: "bold" }}>Products</h2>
    //   <h3></h3>
    // {
    /* <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion> */
    //} <
    // </div>
    <div>
      <div
        className="row mt-5 mx-5"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <h2 style={{ fontWeight: "bold" }}> Security Solutions</h2>
        <div className="col col-mid-6">
          <ul>
            <li>Access Control System</li>
            <li>Surveillance Systems</li>
            <li>Cybersecurity Services</li>
          </ul>
        </div>

        <h2 style={{ fontWeight: "bold" }}>Software Development & Services</h2>
        <div className="col col-mid-4">
          <ul>
            <li>Custom Software Development</li>
            <li>Mobile Applications Development</li>
            <li>Cloud Service Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
