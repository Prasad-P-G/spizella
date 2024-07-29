import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Services from "./components/Services";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Security_Solutuions from "./components/Security_Solutuions";
import SoftwareDS from "./components/SoftwareDS";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/SecuritySolution"
          element={<Security_Solutuions></Security_Solutuions>}
        ></Route>
        <Route
          path="/softwareDevelopmentServices"
          element={<SoftwareDS></SoftwareDS>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
