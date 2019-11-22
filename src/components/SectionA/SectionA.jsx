import React from "react";
import Search from "./Search.jsx";

function SectionA() {
  return (
    <div className="section-one">
      <div className="welcome-headers">
        <h2>Explore</h2>
        <h3>your amazing City</h3>
        <h5>
          Find great and awesome places, empower women in Kisume region, eat
          stay and get unlimited quidance from the local experts
        </h5>
        <Search />
      </div>
    </div>
  );
}

export default SectionA;
