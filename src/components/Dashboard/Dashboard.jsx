import React from "react";
import Header from "../Header/Header.jsx";
import SectionA from "../SectionA/SectionA.jsx";
import SectionB from "../sectionB/SectionB.jsx";

const Dashboard = () => {
  return (
    <div className="main-content">
      <SectionA />
      <SectionB />
    </div>
  );
};

export default Dashboard;
