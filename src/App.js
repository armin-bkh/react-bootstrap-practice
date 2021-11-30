import { Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    <Container fluid="lg">
      <Row>
        <Col xs={12} md={4} lg={3}>
          1
        </Col>
        <Col xs={12} md={4} lg={3}>
          2
        </Col>
        <Col xs={12} md={4} lg={3}>
          3
        </Col>
        <Col xs={12} md={4} lg={3}>
          4
        </Col>
      </Row>
      <Row className={`flex justify-content-center`}>
        <Col xs={(12, { order: "last" })} md={(6, { order: "first" })} lg={3}>
          h
        </Col>
        <Col xs={12} md={6} lg={3}>
          l
        </Col>
        <Col xs={12} md={6} lg={3}>
          m
        </Col>
      </Row>
    </Container>
  );
}

export default App;
