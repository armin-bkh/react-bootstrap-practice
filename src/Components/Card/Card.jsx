import { Card, Col, ListGroup, Row } from "react-bootstrap";

const cards = [
  {
    img: "https://user-images.githubusercontent.com/42708686/121468850-160d7900-c9d9-11eb-9cc2-b3db7bb52df3.png",
    header: "title #1",
    bodyTitle: "react",
    bodyText: "this is react-bootstrap practice card 1",
    footer: "Armin Bakhshi",
  },
  {
    img: "https://user-images.githubusercontent.com/42708686/121468850-160d7900-c9d9-11eb-9cc2-b3db7bb52df3.png",
    header: "title #2",
    bodyTitle: "react",
    bodyText: "this is react-bootstrap practice card 2",
    footer: "Armin Bakhshi",
  },
  {
    img: "https://user-images.githubusercontent.com/42708686/121468850-160d7900-c9d9-11eb-9cc2-b3db7bb52df3.png",
    header: "title #3",
    bodyTitle: "react",
    bodyText: "this is react-bootstrap practice card 3",
    footer: "Armin Bakhshi",
  },
  {
    img: "https://user-images.githubusercontent.com/42708686/121468850-160d7900-c9d9-11eb-9cc2-b3db7bb52df3.png",
    header: "title #4",
    bodyTitle: "react",
    bodyText: "this is react-bootstrap practice card 4",
    footer: "Armin Bakhshi",
  },
];

const CardB = () => {
  return (
    <Row>
      {cards.map((item, i) => (
        <Col className={`mb-4`} xs={12} md={6} xl={4} key={i}>
          <Card>
            <Card.Img variant="top" src={item.img} alt={item.header} />
            <Card.Header as="h5">{item.header}</Card.Header>
            <Card.Body>
              <Card.Title>{item.bodyTitle}</Card.Title>
              <Card.Text>{item.bodyText}</Card.Text>
              <button className={`btn btn-primary d-block w-100 mt-5`}>
                click me
              </button>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Footer className={`text-muted text-center`}>
              {item.footer}
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardB;
