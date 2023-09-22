import { Button, Col, Row } from "react-bootstrap";
import MainLinks from "./MainLinks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchedCard from "./SearchedCard";

const ArtistPage = () => {
  const param = useParams();
  const [tracks, setTracks] = useState([]);
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        "X-RapidAPI-Key": "4dee4a6d79msh10e7f11101e9eafp1eb14cjsn68ce37f58686",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      };

      try {
        const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + param.id, {
          method: "GET",
          headers,
        });

        if (response.ok) {
          const artist = await response.json();

          setArtist(artist);

          const tracksResponse = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist.name, {
            method: "GET",
            headers,
          });

          if (tracksResponse.ok) {
            const tracklist = await tracksResponse.json();
            setTracks(tracklist.data);
          }
        }
      } catch (exception) {
        console.error(exception);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {tracks && (
        <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
          <MainLinks />

          <Row>
            <Col xs={12} md={10} className="mt-5">
              <h2 className="titleMain">{artist.name}</h2>
              <div id="followers">{artist.nb_fan}</div>
              <div className="d-flex justify-content-center" id="button-container">
                <Button variant="success" className="me-2 mainButton " id="playButton">
                  PLAY
                </Button>
                <Button variant="outline-light" className="mainButton " id="followButton">
                  FOLLOW
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={{ span: 10, offset: 1 }} className="p-0">
              <div className="mt-4 d-flex justify-content-start">
                <h2 className="text-white font-weight-bold">Tracks</h2>
              </div>
              <div className="pt-5 mb-5">
                {/* {tracks.map((album, index) => (
                  <SearchedCard album={album} key={"song-" + index} />
                ))} */}
              </div>
            </Col>
          </Row>
        </Col>
      )}
    </>
  );
};

export default ArtistPage;
