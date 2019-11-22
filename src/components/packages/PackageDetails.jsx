import React, { useEffect, useState } from "react";
import Slides from "./Slides.jsx";

export default function PackageDetails() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    setSlides([...slide]);
  }, []);
  return (
    <div>
      <Slides slides={slides} />
      <div className="overall-package-container">
        <h4>Empower Women Holiday Safaris 2019-2020</h4>
        <p>
          Lakeside Adventures and Safaris one of the best tours and travel
          companies in Kenya , you can discover the finest Kenya holidays
          available. Whether your hearts desire is to experience the thrill of a
          Kenya safari in iconic big game destinations such as the Maasai Mara
          and Amboseli National Park, or relaxing on the endless Indian Ocean
          sandy beaches of Mombasa or Malindi, we have it all.
        </p>
        <h5>
          {" "}
          Lakeside Adventures – Cheap Tours and Travel Agency in Kisumu Kenya
        </h5>
        <p>
          We cater for all budgets from the cheap holiday packages to budget
          vacation packages not forgeting the luxury holiday packages.
        </p>
        <h5>
          Hire Best Women Travel Operators for your lake Holiday Tour in kisumu
          Kenya
        </h5>
        <p>
          Kenya beach holidays are perfect for experiencing a unique adventure
          against the backdrops of dramatic landscapes. The captivating beauty
          of Kenyan safari country, the thrill of encountering the Big-Five on
          the desert plains and the contrast of idyllic white sand beaches will
          reflect a true essence of Kenya holiday packages.
        </p>

        <h3>Package Exclusives</h3>
        <div className="package-container">
          <div>
            <h4>Accomodation In Kisumu</h4>
            <p>
              Accommodations in Kenya; With so much accommodations; Hotels
              ,Lodges and Camps available in Kenya, finding whats right for you
              can be a challenge. Our hand-picked portfolio of safari lodges,
              luxury bush camps and beach retreats in Kenya is enormously
              diverse.
            </p>
          </div>
          <img src="/src/images/accomodation.jpg" alt="accomodation images" />
        </div>
        <div className="package-container">
          <img src="/src/images/fishingExp.jpeg" alt="accomodation images" />

          <div>
            <h4>Awesome Fishing Expedition and Experience</h4>
            <p>
              Accommodations in Kenya; With so much accommodations; Hotels
              ,Lodges and Camps available in Kenya, finding whats right for you
              can be a challenge. Our hand-picked portfolio of safari lodges,
              luxury bush camps and beach retreats in Kenya is enormously
              diverse.
            </p>
          </div>
        </div>
        <div className="package-container">
          <div>
            <h4>Crispy Local Delicacies</h4>
            <p>
              Accommodations in Kenya; With so much accommodations; Hotels
              ,Lodges and Camps available in Kenya, finding whats right for you
              can be a challenge. Our hand-picked portfolio of safari lodges,
              luxury bush camps and beach retreats in Kenya is enormously
              diverse.
            </p>
          </div>
          <img src="/src/images/tilapia 1.jpeg" alt="accomodation images" />
        </div>
        <div className="package-container">
          <img src="/src/images/lake basin4.jpeg" alt="accomodation images" />

          <div>
            <h4>Awesome Fishing Expedition and Experience</h4>
            <p>
              Accommodations in Kenya; With so much accommodations; Hotels
              ,Lodges and Camps available in Kenya, finding whats right for you
              can be a challenge. Our hand-picked portfolio of safari lodges,
              luxury bush camps and beach retreats in Kenya is enormously
              diverse.
            </p>
          </div>
        </div>
        <div className="package-container">
          <div>
            <h4>Boat trips and adventures</h4>
            <p>
              Accommodations in Kenya; With so much accommodations; Hotels
              ,Lodges and Camps available in Kenya, finding whats right for you
              can be a challenge. Our hand-picked portfolio of safari lodges,
              luxury bush camps and beach retreats in Kenya is enormously
              diverse.
            </p>
          </div>
          <img src="/src/images/Kisumu_Sunset.jpg" alt="accomodation images" />
        </div>
      </div>
    </div>
  );
}

const slide = [
  {
    city: "Dunga - Beach",
    country: "Kisumu Kenya",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg"
  },
  {
    city: "Hippos - Point",
    country: "Kisumu Kenya",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg"
  },
  {
    city: "Impala Park",
    country: "Kisumu Kenya",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg"
  },
  {
    city: "Luang - NI ",
    country: "Kisumu Kenya",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg"
  },
  {
    city: "KIT - Mikai",
    country: "Kisumu Kenya",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg"
  }
];
