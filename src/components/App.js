import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "../index.css";

import PageNotFound from "./PageNotFound";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Header from "./Header/Header.jsx";
import Login from './login-register/Login.jsx';
import LocalFood from "./Food/LocalFood.jsx";
import SectionA from "./SectionA/SectionA.jsx";
import PackageDetails from "./packages/PackageDetails.jsx";

function App() {
  const [slides, setSlide] = useState([]);

  return (
    <div className="container-fluid">
      <Header />
      {/* <SectionA /> */}

      <Switch>
      <Route path="/login" component={Login} />
        <Route exact path="/" component={Dashboard} />
        {/* <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/local-food" component={LocalFood} />
        <Route path="/view-package" component={PackageDetails} />
        {/* <Route path="/course/:slug" component={ManageCoursePage} /> */}

        {/* The route /course/:slug should come first before the /course route to avooid premature matching */}
        {/* {/* <Route path="/course" component={ManageCoursePage} /> */}

        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;

const slides = [
  {
    city: "Paris",
    country: "France",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg"
  },
  {
    city: "Singapore",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg"
  },
  {
    city: "Prague",
    country: "Czech Republic",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg"
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg"
  },
  {
    city: "Moscow",
    country: "Russia",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg"
  }
];
