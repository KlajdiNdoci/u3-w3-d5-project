import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import VerticalSidebar from "./components/VerticalSidebar";
import HomeMain from "./components/HomeMain";
import Player from "./components/Player";
import ArtistPage from "./components/ArtistPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Row>
            <VerticalSidebar />

            <Routes>
              <Route path="/" element={<HomeMain />} />
              <Route path="/artist/:id" element={<ArtistPage />} />
            </Routes>
          </Row>
        </Container>
        <Player />
      </BrowserRouter>
    </div>
  );
}

export default App;
