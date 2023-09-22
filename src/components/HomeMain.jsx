import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeCardsContainer from "./HomeCardsContainer";
import SearchedCardsContainer from "./SearchedCardsContainer copy";

const HomeMain = () => {
  return (
    <>
      <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage text-white">
        <Row>
          <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
            <Link to="#" className="text-decoration-none">
              TRENDING
            </Link>
            <Link to="#" className="text-decoration-none">
              PODCAST
            </Link>
            <Link to="#" className="text-decoration-none">
              MOODS AND GENRES
            </Link>
            <Link to="#" className="text-decoration-none">
              NEW RELEASES
            </Link>
            <Link to="#" className="text-decoration-none">
              DISCOVER
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="searchResults" style={{ display: "none" }}>
              <h2 className="text-start">Search Results</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                <SearchedCardsContainer />
              </Row>
            </div>
          </Col>
        </Row>
        <HomeCardsContainer title="Rock Classics" />
        <HomeCardsContainer title="Pop Culture" />
        <HomeCardsContainer title="#HipHop" />
      </Col>
    </>
  );
};

export default HomeMain;
