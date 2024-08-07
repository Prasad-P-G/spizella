import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@popperjs/core";
import "bootstrap";

export default function Navbar() {
  const [toggleStatus, setToggleStatus] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    console.log("resize called");
    setToggleStatus(true);
    console.log(toggleStatus);

    if (windowSize.width > 768) {
      console.log("LIMIT REACHED 768");
      setToggleStatus(true);
      console.log(toggleStatus);
    }
    if (windowSize.width < 700) {
      console.log("LIMIT REACHED <768");
      setToggleStatus(true);
      console.log(toggleStatus);
    }
  };

  useEffect(() => {
    console.log("use effect called after resize");

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleButton = () => {
    console.log("toggle clicked");
    console.log(toggleStatus);

    setToggleStatus(!toggleStatus);

    console.log(toggleStatus);
  };
  const itemClicked = () => {
    console.log("item is clicked");
    console.log("width is : ", windowSize.width);
    if (windowSize.width < 768) {
      setToggleStatus(false);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* company Logo */}
          <div className="companyLogoText">
            <Link to="/">
              <img
                style={{
                  margin: 5,
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                }}
                src="./Images/Spizella_Logo.JPG"
                alt="Spizella India Pvt. Ltd."
              />
            </Link>

            <Link
              className="navbar-brand  mx-1"
              style={{ fontWeight: "bold", marginRight: "5px" }}
              to="/"
            >
              <div>
                <div style={{ fontWeight: "bold", marginRight: "50px" }}>
                  Spizella
                </div>
              </div>
            </Link>
          </div>

          {/* <div>
            <h2>Width: {windowSize.width}</h2>
          </div> */}

          <button className="MenutoggleButton" onClick={handleToggleButton}>
            <span className="navbar-toggler-icon"></span>
          </button>
          {toggleStatus ? (
            <div>
              <div className="allItems">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item" onClick={itemClicked}>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/home"
                      style={{ color: "white" }}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      style={{ color: "white" }}
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Products
                    </a>
                    <div
                      className="dropdown-menu"
                      style={{ background: "#484aba" }}
                    >
                      <ul>
                        <li onClick={itemClicked}>
                          <Link
                            className="dropdown-item"
                            to="/SecuritySolution"
                            style={{
                              color: "white",
                              textWrap: "wrap",
                            }}
                          >
                            Security Solutions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      style={{ color: "white" }}
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <div
                      className="dropdown-menu"
                      style={{ background: "#484aba" }}
                    >
                      <ul>
                        <li onClick={itemClicked}>
                          <Link
                            className="dropdown-item"
                            to="/softwareDevelopmentServices"
                            style={{
                              color: "white",
                              textWrap: "wrap",
                            }}
                          >
                            Software Development & Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="nav-item" onClick={itemClicked}>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/about"
                      style={{ color: "white" }}
                    >
                      About
                    </Link>
                  </li>

                  <li className="nav-item" onClick={itemClicked}>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/contact"
                      style={{ color: "white" }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
}
