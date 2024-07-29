import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import * as Icon from "react-bootstrap-icons";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setdescription] = useState("");
  const [phone, setphone] = useState("");

  const user = { email, subject, description };

  const HandleSubmit = (e) => {
    e.preventDefault();

    // console.log({ email }, { subject }, { description });

    const user = { email, subject, description };

    console.log(user);
  };

  return (
    <div>
      <div className="sub-heading">Contact</div>

      <div className="ContainerItems">
        <div>
          <div>
            <div className="contactHeading" style={{ fontSize: "25px" }}>
              WRITE US
            </div>
            <Form
              style={{ width: "300px", fontWeight: "bold" }}
              onSubmit={HandleSubmit}
            >
              <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  value={phone}
                  required
                  onChange={(e) => setphone(e.target.value)}
                  placeholder="Enter Your Email Address"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="ControlInput2">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  value={subject}
                  placeholder="Enter subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="userDescription"
                style={{ width: "300px" }}
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  onChange={(e) => setdescription(e.target.value)}
                  value={description}
                />
              </Form.Group>

              <div className="submitButton">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              {email}
            </Form>
          </div>
        </div>

        {/* divider */}
        <div
          className="vr"
          style={{ height: "200px", margin: "20px", width: "10px" }}
        ></div>

        {/* Contact Information */}
        <div>
          {/* site */}
          <div className="contactInfo">
            <Icon.Globe className="iconStyle" size={30}></Icon.Globe>
            <h3 style={{ fontSize: "20PX", fontWeight: "bold" }}>
              : www.spizellaindia.com
            </h3>
          </div>

          {/* email address */}

          <div className="contactInfo">
            <Icon.EnvelopeArrowUp
              className="iconStyle"
              size={30}
            ></Icon.EnvelopeArrowUp>
            <h3 style={{ fontSize: "20PX", fontWeight: "bold" }}>
              : info@spizellaindia.com
            </h3>
          </div>

          {/* phone */}
          <div className="contactInfo">
            <Icon.TelephoneOutbound
              className="iconStyle"
              size={30}
            ></Icon.TelephoneOutbound>
            <h3 style={{ fontSize: "20PX", fontWeight: "bold" }}>
              : +91-9988669910
            </h3>
          </div>

          {/* locaton / address */}
          <div className="contactInfo">
            <Icon.GeoAltFill className="iconStyle" size={30}></Icon.GeoAltFill>
            <h3 style={{ fontSize: "20PX", fontWeight: "bold" }}>
              : Dharwad,Karnataka,India-580004
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
