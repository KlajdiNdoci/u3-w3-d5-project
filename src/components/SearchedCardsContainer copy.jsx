import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SearchedCard from "./SearchedCard";

const SearchedCardsContainer = ({ title }) => {
  const albums = useSelector(state => state.sidebar.searchResults);
  console.log(albums);

  return (
    <>
      {albums && (
        <Row id="rock">
          <Col xs={10}>
            <div>
              <h2 className="text-start">{title}</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                {albums.map((album, index) => (
                  <SearchedCard album={album} key={"song-" + index} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default SearchedCardsContainer;
