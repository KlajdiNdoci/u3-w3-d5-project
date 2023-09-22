import { Link } from "react-router-dom";

const { Container, Col, Row } = require("react-bootstrap");

const Player = () => {
  return (
    <Container fluid className="container-fluid fixed-bottom bg-container pt-1">
      <Row className="row">
        <Col lg={{ span: 10, offset: 2 }}>
          <Row>
            <Col
              xs={{ span: 6, offset: 3 }}
              md={{ span: 4, offset: 4 }}
              lg={{ span: 2, offset: 5 }}
              className="playerControls mt-1"
            >
              <Row>
                <div className="d-flex justify-content-between">
                  <Link to="#">
                    <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                  </Link>
                  <Link to="#">
                    <img src="playerbuttons/Previous.png" alt="shuffle" />
                  </Link>
                  <Link to="#">
                    <img src="playerbuttons/Play.png" alt="shuffle" />
                  </Link>
                  <Link to="#">
                    <img src="playerbuttons/Next.png" alt="shuffle" />
                  </Link>
                  <Link to="#">
                    <img src="playerbuttons/Repeat.png" alt="shuffle" />
                  </Link>
                </div>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
