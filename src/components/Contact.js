import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import validation from "./Validation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Contact() {
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Description, setdescription] = useState("");
  const [PhoneNumber, setphone] = useState("");
  const [Valid, setValid] = useState(false);
  const [ValidEmail, setValidEmail] = useState(false);
  const [BlurString, setBlurString] = useState("blur(8px)");

  //Error hook
  const [errors, setErrors] = useState({});

  const handleEmail = (e) => {
    console.log(Email);
    console.log(e.target.value);

    setEmail(e.target.value);

    setValidEmail(ValidateEmail(e.target.value));
  };

  const handleDescription = (e) => {
    setdescription(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handlePhone = (value) => {
    setphone(value);
    setValid(ValidatePhoneNumber(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Email + "," + PhoneNumber + "," + Subject + "," + Description);
  };

  const ValidateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(email);
  };
  const ValidatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^\d{12}$/;

    return phonePattern.test(phoneNumber);
    // if (!phonePattern.test(PhoneNumber)) {
    //   errors.PhoneNumber = "Invalid Phone Number";
    //   return false;
    // } else {
    //   return true;
    // }
  };

  return (
    <div>
      <div className="sub-heading">Contact</div>
      <div className="ContainerItems">
        <div>
          <div>
            <div
              className="contactHeading"
              style={{ fontSize: "25px", fontWeight: "bold" }}
            >
              WRITE US
            </div>

            <form onSubmit={handleSubmit}>
              <div>
                <label for="email" style={{ fontSize: "18px" }}>
                  <strong>Email</strong>
                </label>
                <input
                  style={{ width: "300px" }}
                  type="email"
                  placeholder="Enter Email Address"
                  onChange={handleEmail}
                  value={Email}
                  className="form-control"
                ></input>
                {!ValidEmail && (
                  <p style={{ color: "Red", fontWeight: "bold" }}>
                    Please enter a valid email
                  </p>
                )}
              </div>

              <div>
                <div>
                  <labelc style={{ fontSize: "18px" }}>
                    <strong>Phone Number</strong>
                    <PhoneInput
                      country={"in"}
                      inputProps={{
                        require: true,
                      }}
                      value={PhoneNumber}
                      onChange={handlePhone}
                    ></PhoneInput>
                  </labelc>
                </div>
                {!Valid && (
                  <p style={{ color: "Red", fontWeight: "bold" }}>
                    Please enter a valid phone number
                  </p>
                )}
              </div>

              <div>
                <label for="subject" style={{ fontSize: "18px" }}>
                  <strong>Subject</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  value={Subject}
                  className="form-control"
                  onChange={handleSubject}
                ></input>
              </div>

              <div>
                <label for="description" style={{ fontSize: "18px" }}>
                  <strong>Description</strong>
                </label>
                <textarea
                  type="textarea"
                  rows="5"
                  cols="40"
                  value={Description}
                  placeholder="Enter Description"
                  className="form-control"
                  onChange={handleDescription}
                ></textarea>
              </div>
              <div className="btnSend">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={Valid && ValidEmail ? false : true}
                >
                  SEND
                </button>
              </div>
            </form>
            {/* <div className="btnSend">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={Valid && ValidEmail ? false : true}
              >
                SEND
              </button>
            </div> */}
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
            <h3
              style={{
                fontSize: "20PX",
                fontWeight: "bold",
                filter: !Valid || !ValidEmail ? "blur(8px)" : "none",
              }}
            >
              : www.spizellaindia.com
            </h3>
          </div>

          {/* email address */}

          <div className="contactInfo">
            <Icon.EnvelopeArrowUp
              className="iconStyle"
              size={30}
            ></Icon.EnvelopeArrowUp>
            <h3
              style={{
                fontSize: "20PX",
                fontWeight: "bold",
                filter: !Valid || !ValidEmail ? "blur(8px)" : "none",
              }}
            >
              : info@spizellaindia.com
            </h3>
          </div>

          {/* phone */}
          <div className="contactInfo">
            <Icon.TelephoneOutbound
              className="iconStyle"
              size={30}
            ></Icon.TelephoneOutbound>
            <h3
              style={{
                fontSize: "20PX",
                fontWeight: "bold",
                filter: !Valid || !ValidEmail ? "blur(8px)" : "none",
              }}
            >
              : +91-9988669910
            </h3>
          </div>

          {/* locaton / address */}
          <div className="contactInfo">
            <Icon.GeoAltFill className="iconStyle" size={30}></Icon.GeoAltFill>
            <h3
              style={{
                fontSize: "20PX",
                fontWeight: "bold",
                filter: !Valid || !ValidEmail ? "blur(8px)" : "none",
              }}
            >
              : Dharwad,Karnataka,India-580004
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
