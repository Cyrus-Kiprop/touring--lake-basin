import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Destination = () => {
  const [hotel, setHotel] = useState();
  useEffect(() => {
    setHotel([...hotels]);
  }, []);
  return (
    <div>
      <div>
        <h4 style={{ fontSize: "0.8em" }}>Featured </h4>
        <h3 style={{ fontSize: "2.2em" }}>Featured Destination in Kisumu</h3>
        <div
          className="row display-items-container"
          sytle={{ backgroundColor: "white" }}
        >
          {hotel &&
            hotel.map((hotel, index) => {
              return (
                <div key={index} className="col-md-3 card-resize">
                  <div key={index} className="display-card" align="center">
                    <Card>
                      <div className="hotel-card-image">
                        <CardImg
                          top
                          width="100%"
                          src="/src/images/Pinecone.jpg"
                          alt="dfjlsf"
                        />
                      </div>

                      <CardBody>
                        <CardTitle>
                          {hotel.name}{" "}
                          <span style={{ color: "blue" }}> $40 night</span>
                        </CardTitle>
                        {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                        <CardText>{hotel.description}</CardText>
                        <span style={{ padding: "0 5px", fontSize: ".8em" }}>
                          Kisumu, Hotel
                        </span>
                        <Button
                          style={{
                            padding: "0px 18px",
                            fontSize: ".8em",
                            background: "green"
                          }}
                        >
                          <a href={hotel.link}>Book Now</a>
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Destination;

const hotels = [
  {
    src: "/src/images/fishingExp.jpeg",
    name: "Pinecone Hotel",
    description: " Behind Dunga hills, Bed and breakfast",
    link:
      "https://www.booking.com/searchresults.en-gb.html?aid=311984;label=pinecone-%2A_uWQAEFhZ2mtI997Z7xeAS260938624708%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atikwd-4223731761%3Alp9063091%3Ali%3Adec%3Adm;sid=d34050d9996f6621e6440b7d9f812a83;city=-2251539;expand_sb=1;highlighted_hotels=1593051;hlrd=no_dates;keep_landing=1;redirected=1;source=hotel&gclid=Cj0KCQiAiNnuBRD3ARIsAM8KmlvGx28biIM81Jg4tqXCklpMOF0iOPh9DmR-61Oa-TTauQbEDGuHW-caArhtEALw_wcB&"
  },
  {
    src: "/src/images/fishingExp.jpeg",
    name: "Pinecone Hotel",
    description: " Behind Dunga hills, Bed and breakfast",
    link:
      "https://www.booking.com/searchresults.en-gb.html?aid=311984;label=pinecone-%2A_uWQAEFhZ2mtI997Z7xeAS260938624708%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atikwd-4223731761%3Alp9063091%3Ali%3Adec%3Adm;sid=d34050d9996f6621e6440b7d9f812a83;city=-2251539;expand_sb=1;highlighted_hotels=1593051;hlrd=no_dates;keep_landing=1;redirected=1;source=hotel&gclid=Cj0KCQiAiNnuBRD3ARIsAM8KmlvGx28biIM81Jg4tqXCklpMOF0iOPh9DmR-61Oa-TTauQbEDGuHW-caArhtEALw_wcB&"
  },
  {
    src: "/src/images/fishingExp.jpeg",
    name: "Pinecone Hotel",
    description: " Behind Dunga hills, Bed and breakfast",
    link:
      "https://www.booking.com/searchresults.en-gb.html?aid=311984;label=pinecone-%2A_uWQAEFhZ2mtI997Z7xeAS260938624708%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atikwd-4223731761%3Alp9063091%3Ali%3Adec%3Adm;sid=d34050d9996f6621e6440b7d9f812a83;city=-2251539;expand_sb=1;highlighted_hotels=1593051;hlrd=no_dates;keep_landing=1;redirected=1;source=hotel&gclid=Cj0KCQiAiNnuBRD3ARIsAM8KmlvGx28biIM81Jg4tqXCklpMOF0iOPh9DmR-61Oa-TTauQbEDGuHW-caArhtEALw_wcB&"
  },
  {
    src: "/src/images/fishingExp.jpeg",
    name: "Pinecone Hotel",
    description: " Behind Dunga hills, Bed and breakfast",
    link:
      "https://www.booking.com/searchresults.en-gb.html?aid=311984;label=pinecone-%2A_uWQAEFhZ2mtI997Z7xeAS260938624708%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atikwd-4223731761%3Alp9063091%3Ali%3Adec%3Adm;sid=d34050d9996f6621e6440b7d9f812a83;city=-2251539;expand_sb=1;highlighted_hotels=1593051;hlrd=no_dates;keep_landing=1;redirected=1;source=hotel&gclid=Cj0KCQiAiNnuBRD3ARIsAM8KmlvGx28biIM81Jg4tqXCklpMOF0iOPh9DmR-61Oa-TTauQbEDGuHW-caArhtEALw_wcB&"
  }
];
