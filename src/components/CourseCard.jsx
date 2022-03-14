import { Container, Col, Row, Card, Button } from "react-bootstrap";

const CourseCard = ({ data }) => {
  return (
    <Container className="text-center mt-5">
      <Row className="d-flex justify-content-center gap-2">
        {data.map((item) => {
          const { name, text, id, img } = item;
          return (
            <Col
              className="d-flex justify-content-center"
              sm={12}
              md={5}
              lg={3}
              key={id}
            >
              <Card className="card" style={{ width: "18rem" }}>
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
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
