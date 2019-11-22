import React from "react";
import { Route, Switch } from "react-router-dom";

import "../index.css";

import PageNotFound from "./PageNotFound";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Header from "./Header/Header.jsx";
import About from "./About/About.jsx";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      {/* <Dashboard /> */}
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={About} />
        {/* <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} /> */}

        {/* The route /course/:slug should come first before the /course route to avooid premature matching */}
        {/* <Route path="/course" component={ManageCoursePage} /> */}

        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
