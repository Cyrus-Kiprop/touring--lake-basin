import React from "react";
import Header from "../Header/Header.jsx";
import SectionA from "../SectionA/SectionA.jsx";
import SectionB from "../sectionB/SectionB.jsx";
import Hotel from "../Hotels/Hotel.jsx";
import Destination from "../Destination/Destination.jsx";
import Packages from "../packages/Packages.jsx";

const Dashboard = () => {
  return (
    <div className="main-content">
      <SectionA />
      <SectionB />
      <Destination />
      <Packages />
      <Hotel />
    </div>
  );
};

export default Dashboard;
