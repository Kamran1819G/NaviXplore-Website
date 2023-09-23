import React from "react";
import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import {Container, Col, Row, Alert } from "react-bootstrap";


import Navbar from "./components/Navbar/NavbarComponent";
import Home from "./pages/Home";
import NaviMumbaiMetroMap from "./pages/NaviMumbaiMetroMap";
import MediaCoverage from "./pages/MediaCoverage";
import AdvertiseWithUs from "./pages/AdvertiseWithUs";
import NaviXploreAppFeatures from "./pages/NaviXploreAppFeatures";
import Footer from "./components/Footer/FooterComponent";



function App() {
  const [show, setShow] = React.useState(true);
  return (
    <>
    <Alert className="fixed-bottom download-alert" show={show}  onClose={() => setShow(false)}  dismissible>
        <Container>
          <Row>
            <Col lg={2}>
              <span className="brand">
                Navi<span>X</span>plore
              </span>
            </Col>
            <Col lg={6} className="align-self-center">
              <span>
                Get access to trusted, authentic & real time information about
                Navi Mumbai Metro. Live locations, time tables, passenger
                services, amenities and more at your fingertips.
              </span>
            </Col>
            <Col lg={2} className="align-self-center">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="get-on-playstore"
                width={180}
              />
            </Col>
            <Col lg={2} className="align-self-center">
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"
                alt="get-on-appstore"
                width={150}
              />
            </Col>
          </Row>
        </Container>
      </Alert>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/navi-mumbai-metro-map" element={<NaviMumbaiMetroMap />} />
        <Route path="/navixplore-app-features" element={<NaviXploreAppFeatures/>} />
        <Route path="/media-coverage" element={<MediaCoverage />} />
        <Route path="/advertise-with-us" element={<AdvertiseWithUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
