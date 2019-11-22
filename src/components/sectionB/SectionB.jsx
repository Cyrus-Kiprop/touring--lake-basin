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

const SectionB = props => {
  return (
    <div className="section-two-container">
      <Card className="advert-card" align="center">
        <CardImg
          top
          width="100%"
          src="/src/images/tilapia 1.jpeg"
          alt="Card image cap"
        />

        <i className="fas-fa-route"></i>
        <CardBody>
          <CardTitle>Local Foods</CardTitle>
          <CardSubtitle>
            Enjoy great cuisine and meals prepaired by our local Kisumu women
          </CardSubtitle>
          <CardText></CardText>
          <Button>
            <h4>Explore</h4>
          </Button>
        </CardBody>
      </Card>
      <Card className="advert-card" align="center">
        <CardImg
          top
          width="100%"
          src="/src/images/culture"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </CardText>
          <Button>
            <h4>
              Explore <i className="fas-fa-arrow"></i>
            </h4>
          </Button>
        </CardBody>
      </Card>
      <Card className="advert-card" align="center">
        <CardImg
          top
          width="100%"
          src="/src/images/lake basin4.jpeg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="advert-card" align="center">
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default SectionB;
