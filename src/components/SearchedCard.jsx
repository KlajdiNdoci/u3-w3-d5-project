import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchedCard = ({ song }) => {
  console.log(song);
  return (
    <>
      {song && (
        <Col className="text-center" id={song.album.id}>
          <Link to={`/album/${song.album.id}`}>
            <img className="img-fluid" src={song.album.cover_medium} alt="1" />
          </Link>
          <p>
            <Link to={`/album/${song.album.id}`} className="text-decoration-none">
              Album: "$
              {song.album.title.length < 16 ? `${song.album.title}` : `${song.album.title.substring(0, 16)}...`}
              "<br />
            </Link>
            <Link to={`/artist/${song.artist.id}`} className="text-decoration-none">
              Artist: ${song.artist.name}
            </Link>
          </p>
        </Col>
      )}
    </>
  );
};

export default SearchedCard;
