import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Packages = () => {
  return (
    <div>
      <div className="row ">
        {[1, 2, 3, 4].map((item, i) => {
          return (
            <div key={i} className="col-md-3 card-resize">
              <Card
                className="display-card"
                align="center"
                style={{
                  boxShadow: "none",
                  border: "1px solid gray",
                  borderRadius: "0px"
                }}
              >
                <CardImg
                  top
                  width="100%"
                  src="/src/images/fishingExp.jpeg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Ratings</CardTitle>
                  <CardSubtitle>
                    <div className="rating">
                      <div className="rating__star" title="order in DOM: 1">
                        ⭐
                      </div>
                      <div className="rating__star" title="order in DOM: 2">
                        ⭐
                      </div>
                      <div className="rating__star" title="order in DOM: 3">
                        ⭐
                      </div>
                      <div className="rating__star" title="order in DOM: 4">
                        ⭐
                      </div>
                      <div className="rating__star" title="order in DOM: 5">
                        ⭐
                      </div>
                    </div>
                  </CardSubtitle>
                  <CardText>
                    COAST 5 Days Flying Holiday Packages From Ksh. 54,499/-With
                    Return flights Tickets and Free...
                  </CardText>
                  <span>
                    <i
                      className="fas fa-map-marked"
                      style={{
                        marginRight: "10px",
                        color: "rgb(133, 80, 231)"
                      }}
                    ></i>{" "}
                    <h6 style={{ fontSize: ".8em" }}>Hippos Point</h6>
                  </span>
                  <Button
                    style={{
                      padding: "0px 18px",
                      fontSize: ".8em",
                      background: "green"
                    }}
                  >
                    <a href="/view-package"> Discover</a>
                  </Button>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Packages;
