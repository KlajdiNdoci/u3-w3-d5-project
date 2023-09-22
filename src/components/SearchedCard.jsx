import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchedCard = ({ album }) => {
  return (
    <>
      <Col className="text-center" id={album.album.id}>
        <Link to="/album_page.html?id={songInfo.album.id}">
          <img className="img-fluid" src={album.album.cover_medium} alt="1" />
        </Link>
        <p>
          <Link to="/album_page.html?id={songInfo.album.id}" className="text-decoration-none">
            Album: "$
            {album.album.title.length < 16 ? `${album.album.title}` : `${album.album.title.substring(0, 16)}...`}
            "<br />
          </Link>
          <Link to="/artist_page.html?id={songInfo.artist.id} " className="text-decoration-none">
            Artist: ${album.artist.name}
          </Link>
        </p>
      </Col>
    </>
  );
};

export default SearchedCard;
