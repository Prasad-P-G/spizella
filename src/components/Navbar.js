import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@popperjs/core";
import "bootstrap";

export default function Navbar() {
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                  style={{ color: "white" }}
                >
                  Products
                </Link>
              </li> */}

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
                    <li>
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
                    <li>
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

              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/others"
                  style={{ color: "white" }}
                >
                  Others
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                  style={{ color: "white" }}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
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
      </nav>
    </div>
  );
}
