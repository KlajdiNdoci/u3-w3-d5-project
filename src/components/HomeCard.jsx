import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeCard = ({ artist }) => {
  const [song, setSong] = useState(null);

  const handleArtist = async () => {
    const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4dee4a6d79msh10e7f11101e9eafp1eb14cjsn68ce37f58686",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        let result = await response.json();
        const songInfo = result.data[0];
        setSong(songInfo);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleArtist();
  }, []);

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

export default HomeCard;
