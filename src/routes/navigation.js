import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "../pages/contactUs";
import Home from "../pages/home";

function Navigation(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
      </Routes>
    </Router>
  );
}

export default Navigation;
