import React from "react";
// import CardGroup from "react-bootstrap/CardGroup";
// import { Card, Button } from "react-bootstrap/Card";

import { Card, Button } from "react-bootstrap";

const CourseCard = ({ data }) => {
  return (
    <div className="container">
      {data.map((item) => {
        const { name, text, id, img } = item;
        return (
          <Card className="card" style={{ width: "18rem" }} key={id}>
            <Card.Img className="img" variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Button
                variant="outline-warning
            bg-dark"
              >
                Get Info
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CourseCard;
