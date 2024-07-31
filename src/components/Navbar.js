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
            <Link>
              <img
                width={50}
                height={50}
                style={{ marginTop: 5 }}
                src="./Images/spizellaLogo.JPG"
                to="/"
              />
            </Link>

            <Link
              className="navbar-brand  mx-1"
              style={{ fontWeight: "bold", marginRight: "10px" }}
              to="/"
            >
              <div>
                <h1 style={{ fontWeight: "bold", marginRight: "50px" }}>
                  Spizella
                </h1>
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
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/SecuritySolution"
                        style={{ color: "white" }}
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
                <div className="dropdown-menu">
                  <ul>
                    <li style={{ width: "350px" }}>
                      <Link
                        className="dropdown-item"
                        to="/softwareDevelopmentServices"
                        style={{ color: "white" }}
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
