import { Col, Row } from "react-bootstrap";
import HomeCardsContainer from "./HomeCardsContainer";

import { useEffect, useState } from "react";
import MainLinks from "./MainLinks";
import SearchedCardsContainer from "./SearchedCardsContainer";

const HomeMain = () => {
  let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

  let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  const [rockRandomArtists, setRockRandomArtists] = useState([]);
  const [popRandomArtists, setPopRandomArtists] = useState([]);
  const [hipHopRandomArtists, setHipHopRandomArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rockRandomArtistsTemp = [];
      const popRandomArtistsTemp = [];
      const hipHopRandomArtistsTemp = [];

      while (rockRandomArtistsTemp.length < 4) {
        const artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
        if (!rockRandomArtistsTemp.includes(artist)) {
          rockRandomArtistsTemp.push(artist);
        }
      }

      while (popRandomArtistsTemp.length < 4) {
        const artist = popArtists[Math.floor(Math.random() * popArtists.length)];
        if (!popRandomArtistsTemp.includes(artist)) {
          popRandomArtistsTemp.push(artist);
        }
      }

      while (hipHopRandomArtistsTemp.length < 4) {
        const artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
        if (!hipHopRandomArtistsTemp.includes(artist)) {
          hipHopRandomArtistsTemp.push(artist);
        }
      }

      setRockRandomArtists(rockRandomArtistsTemp);
      setPopRandomArtists(popRandomArtistsTemp);
      setHipHopRandomArtists(hipHopRandomArtistsTemp);
    };

    fetchData();
  }, []);

  return (
    <>
      {rockRandomArtists && popRandomArtists && hipHopRandomArtists && (
        <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage text-white">
          <MainLinks />
          <Row>
            <Col xs={10}>
              <div id="searchResults">
                <h2 className="text-start">Search Results</h2>

                <SearchedCardsContainer />
              </div>
            </Col>
          </Row>
          <HomeCardsContainer title="Rock Classics" artists={rockRandomArtists} />
          <HomeCardsContainer title="Pop Culture" artists={popRandomArtists} />
          <HomeCardsContainer title="#HipHop" artists={hipHopRandomArtists} />
        </Col>
      )}
    </>
  );
};

export default HomeMain;
