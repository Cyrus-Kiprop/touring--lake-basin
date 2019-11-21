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

function LocalFood() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    setFood([...foods]);
  }, []);
  console.log(food);
  return (
    <div>
      <div className="row display-items-container">
        {food &&
          food.map((meal, index) => {
            console.log(meal);
            return (
              <div key={index} className="col-md-3 card-resize">
                <Card className="display-card" align="center">
                  <CardImg
                    top
                    width="100%"
                    src={meal.src}
                    alt="Card image cap"
                  />

                  <i className="fas-fa-route"></i>
                  <CardBody>
                    <CardTitle>{meal.title}</CardTitle>
                    <CardSubtitle>{meal.description}</CardSubtitle>
                    {meal.nutrition &&
                      meal.nutrition.map((compound, index) => (
                        <CardText key={index}>compound</CardText>
                      ))}
                  </CardBody>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default LocalFood;

// MOCK DATA FOR THE LOCAL FOOD AVAILABLE AND SOLD BY THE LOCAL KISUMU WOMENS

const foods = [
  {
    src: "/src/images/tilapia 1.jpeg",
    title: "Ugali-Fish",
    description:
      "Enjoy great cuisine and meals prepaired by our local Kisumu women",
    nutrition: ["Protein - 4%", "Magnesium - 0.9%", "Sodium - 1.4%"]
  },
  {
    src: "/src/images/tilapia 1.jpeg",
    title: "Ugali-Fish",
    description:
      "Enjoy great cuisine and meals prepaired by our local Kisumu women",
    nutrition: ["Protein - 4%", "Magnesium - 0.9%", "Sodium - 1.4%"]
  },
  {
    src: "/src/images/tilapia 1.jpeg",
    title: "Ugali-Fish",
    description:
      "Enjoy great cuisine and meals prepaired by our local Kisumu women",
    nutrition: ["Protein - 4%", "Magnesium - 0.9%", "Sodium - 1.4%"]
  },
  {
    src: "/src/images/tilapia 1.jpeg",
    title: "Ugali-Fish",
    description:
      "Enjoy great cuisine and meals prepaired by our local Kisumu women",
    nutrition: ["Protein - 4%", "Magnesium - 0.9%", "Sodium - 1.4%"]
  },
  {
    src: "/src/images/tilapia 1.jpeg",
    title: "Ugali-Fish",
    description:
      "Enjoy great cuisine and meals prepaired by our local Kisumu women",
    nutrition: ["Protein - 4%", "Magnesium - 0.9%", "Sodium - 1.4%"]
  },
  {
    src: "/src/images/tilapia 1.jpeg",
    title: "Ugali-Fish",
    description:
      "Enjoy great cuisine and meals prepaired by our local Kisumu women",
    nutrition: ["Protein - 4%", "Magnesium - 0.9%", "Sodium - 1.4%"]
  }
];
