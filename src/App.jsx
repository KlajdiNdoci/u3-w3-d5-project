import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import VerticalSidebar from "./components/VerticalSidebar";
import HomeMain from "./components/HomeMain";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Row>
            <VerticalSidebar />
            <HomeMain />
            <Routes>
              {/* <Route path="/" element={<MyArticles />} />
              <Route path="/details/:id" element={<Details />} /> */}
            </Routes>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
